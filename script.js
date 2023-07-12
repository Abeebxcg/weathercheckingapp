press = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=84e291fe56228f24a7b51330fac4b233`
  )
    .then((response) => response.json())
    .then((data) => {
      if (userInput.value != "") {
        document.getElementById("img").style.display = "none";
        displayTable.innerHTML = `
      <tr>
                <td>Location</td>
                <td>${data.name}</td>
              </tr>
              <tr>
                <td>Temperature (NG)</td>
                <td>${Math.round(data.main.temp - 273)}</td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>${data.wind.speed}</td>
              </tr>
              <tr>
                <td>Weather</td>
                <td>${data.weather[0].description}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>${data.name}</td>
              </tr>
        `;
        tempDisp.innerHTML = `
        <div class=" align-items-center justify-content-center">
                    <div class=" mb-3" style=" font-size:80px">${Math.round(
                      data.main.temp - 273
                    )}℃</div>
                    <div class="h4 mb-3">${data.name}, NG</div>
                    <div class="h4 mb-3">${data.weather[0].description}</div>
                  </div>
        
        `;
        userInput.value = "";
      } else {
        document.getElementById("alert").style.display = "block";
      }
    });
};

function getDate() {
  const date = new Date();
  console.log(date.getUTCDate());
  let newDate = date.toLocaleDateString();
  showDate.innerHTML = `Today:   ${newDate}`;
}
