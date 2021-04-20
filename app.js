// Connect API
const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`

// Search Functionality
const searchLocation = async () => {
  try {
    let inputValue = document.querySelector(`#input`).value
    document.querySelector(`#input`).value = ""
    if (inputValue === "") {
      return null
    } else {
      let response = await axios.get(
        `${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`
      )
      showWeatherData(response.data)
      changeBackground(response.data)
      console.log(response)
    }
  } catch (error) {
    console.error(error)
  }
}

searchLocation()

// Display Endpoint Data
const showWeatherData = (data) => {
  removeCard()
  removeMain()
  let mainCard = `
  <h1 id="main-data">${data.name}<br><small><span>Current Conditions: ${data.weather[0].main}</span></small></h1> 
  `
  document
    .querySelector(`.main-card`)
    .insertAdjacentHTML(`afterbegin`, mainCard)
  let cards = `
  <h3 id="main-temp" class="card">Current:<br> <span>${data.main.temp}°</span></h3>
  <h3 id="feels-like" class="card">Feels Like:<br> <span>${data.main.feels_like}°</span></h3>
  <h3 id="humidity" class="card">Humidity:<br> <span>${data.main.humidity}%</span></h3>
  <h3 id="wind" class="card">Wind Speed:<br> <span>${data.wind.speed} mph</span></h3>
  <h3 id="min-max" class="card">High/Low:<br> <span>${data.main.temp_min}°/${data.main.temp_max}°</span></h3>
  `
  document
    .querySelector(`.card-container`)
    .insertAdjacentHTML(`afterbegin`, cards)
}

// Event Listener

const searchButton = document.querySelector(`form`)
searchButton.addEventListener("submit", (e) => {
  e.preventDefault()
  searchLocation()
})

// Remove

const removeMain = () => {
  const removeData = document.querySelector(".main-card")
  while (removeData.lastChild) {
    removeData.removeChild(removeData.lastChild)
  }
}
const removeCard = () => {
  const removeCard = document.querySelectorAll(".card-container")
  for (let i = 0; i < removeCard.length; i++) {
    while (removeCard[i].firstChild) {
      removeCard[i].removeChild(removeCard[i].firstChild)
    }
  }
}

// Changing Background Images

let changeBackground = (data) => {
  let backImage = document.querySelector(".body")
  if (`${data.weather[0].main}` === `Clouds`) {
    backImage.style.backgroundImage = `url(
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    )`
  } else if (`${data.weather[0].main}` === `Clear`) {
    backImage.style.backgroundImage = `url(
      "https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
    )`
  } else if (`${data.weather[0].main}` === `Rain`) {
    backImage.style.backgroundImage = `url(
      "https://images.unsplash.com/photo-1518803194621-27188ba362c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80"
    )`
  } else if (`${data.weather[0].main}` === `Thunder`) {
    backImage.style.backgroundImage = `url(
      "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    )`
  } else if (`${data.weather[0].main}` === `Snow`) {
    backImage.style.backgroundImage = `url(
      "https://images.unsplash.com/photo-1453489629239-2d15752eb271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"
    )`
  }
}
