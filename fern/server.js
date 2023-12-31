const express = require("express");
const app = express();
const multer = require("multer");

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  storageBucket: "gs://crud-b0af0.appspot.com",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// multer config
const mstorage = multer.memoryStorage();
const upload = multer({ storage: mstorage });

const db = admin.firestore();
const storage = admin.storage();
const bucket = storage.bucket();

app.post("/uploadFile", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const file = req.file;

  // Set the destination path within Firebase Storage
  const filePath = "images/" + file.originalname;

  // Upload the file to Firebase Storage
  const uploadTask = bucket.file(filePath).createWriteStream();

  uploadTask.on("error", (err) => {
    console.error(err);
    res.status(500).send("Upload failed");
  });

  uploadTask.on("finish", () => {
    res.status(200).send("Upload successful");
  });

  uploadTask.end(file.buffer);
});

app.get("/list-files", async (req, res) => {
  try {
    const bucket = admin.storage().bucket();
    const [files] = await bucket.getFiles();

    const fileNames = files.map((file) => {
      return {
        name: file.name,
        size: file.metadata.size,
        contentType: file.metadata.contentType,
      };
    });

    res.json(fileNames);
  } catch (error) {
    console.error("Error listing files:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/download", async (req, res) => {
  try {
    const { filePath } = req.body;
    const bucket = admin.storage().bucket();

    const file = bucket.file(filePath);

    const [fileExists] = await file.exists();

    if (!fileExists) {
      return res.status(404).send("File not found.");
    }

    const fileStream = file.createReadStream();
    res.setHeader("Content-Type", file.metadata.contentType);
    res.setHeader("Content-Disposition", `attachment; filename="${filePath}"`);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error downloading file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/create", async (req, res) => {
  try {
    const id = req.body.email;
    const userJson = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    // const response = await db.collection("users").doc(id).set(userJson);
    const response = await db.collection("users").add(userJson);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.get("/read/all", async (req, res) => {
  try {
    const userRef = db.collection("users");
    const response = await userRef.get();
    let responseArr = [];
    response.forEach((doc) => {
      responseArr.push(doc.data());
    });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.get("/read/all/new", async (req, res) => {
  try {
    const userRef = db.collection("users");
    const response = await userRef.get();
    const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.get("/read/:id", async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.params.id);
    const response = await userRef.get();
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

app.post("/update", async (req, res) => {
  try {
    const id = req.body.id;
    const newFirstName = req.body.firstName;

    const userRef = await db.collection("users").doc(id).update({
      firstName: newFirstName,
    });
    res.send(userRef);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const response = await db.collection("users").doc(req.params.id).delete();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
