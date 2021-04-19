// Connect API
const DOMAIN = `api.openweathermap.org/data/2.5/weather?`
const = API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
const URL = `${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`

// Search Functionality
const searchLocation = async () => {
  try {

    let inputValue = document.querySelector(`input`).value
    let response = await axios.get(URL)


  } catch (error) {
    console.error(error)
  }
}

// Display Endpoint Data
const showWeatherData = () => {
  
}
// Changing Background Images

// Event Listener
