const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const dataHide = document.querySelector(".middle_layer");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = "Please enter some value in input";
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d6246d71efb3126487d0d3e72ad05144`;
      const response = await fetch(url);
      const data = await response.json();

      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
      temp_real_val.innerText = arrData[0].main.temp;
      const tempMode = arrData[0].weather[0].main;

      if (tempMode == "Sunny") {
        temp_status.innerHTML =
          "<i class='fa fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMode == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMode == "Rainy") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>";
      }

      dataHide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerText = "Please enter correct city name";
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
