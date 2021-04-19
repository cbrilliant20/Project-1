// Connect API
const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
// const URL = `${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`

// Search Functionality
const searchLocation = async () => {
  try {
    let inputValue = document.querySelector(`#input`).value
    let response = await axios.get(`${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`)
    showWeatherData(response.data)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

searchLocation()

// Display Endpoint Data
const showWeatherData = (data) => {
  let mainCard = `
  <h1 id="main-data">${data.name}<br>Feels Like: ${data.main.feels_like}</h1> 
  ` //  <i>${data.weather.icon}</i>
  document
    .querySelector(`.main-card`)
    .insertAdjacentHTML(`afterbegin`, mainCard)
}

// Changing Background Images

// Event Listener

const searchButton = document.querySelector(`#search-button`)
searchButton.addEventListener("click", searchLocation)
