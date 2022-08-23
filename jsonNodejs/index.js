// JSON stands for javascript object notation. JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

// stringify => object to json
// parse => json to object

const test = {
    name: 'Himanshu',
    email: 'himanshu@gmail.com',
    phone: 8460159550
}

const testStringy = JSON.stringify(test)

const testParse = JSON.parse(testStringy)

console.log("🚀 ~ file: index.js ~ line 12 ~ test", testParse)

