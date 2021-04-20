// Connect API
const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
// const URL = `${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`

// Search Functionality
const searchLocation = async () => {
  try {
    let inputValue = document.querySelector(`#input`).value
    if (inputValue === "") {
      return null
    } else {
      let response = await axios.get(
        `${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`
      )
      showWeatherData(response.data)
      changeBackground(response.data)
      // console.log(response)
    }
  } catch (error) {
    console.error(error)
  }
}

searchLocation()

// Display Endpoint Data
const showWeatherData = (data) => {
  removeMain()

  // removeCard()
  let mainCard = `
  <h1 id="main-data">${data.name}<br><small>Current Conditions: ${data.weather[0].main}</small></h1> 
  ` //<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png/>
  document
    .querySelector(`.main-card`)
    .insertAdjacentHTML(`afterbegin`, mainCard)

  let card1 = `
  <h3 id="main-temp">Current:<br> <span>${data.main.temp}°</span></h3>
  `
  document.querySelector(`.card-1`).insertAdjacentHTML(`afterbegin`, card1)

  let card2 = `
  <h3 id="feels-like">Feels Like:<br> <span>${data.main.feels_like}°</span></h3>
  `
  document.querySelector(`.card-2`).insertAdjacentHTML(`afterbegin`, card2)

  let card3 = `
  <h3 id="humidity">Humidity:<br> <span>${data.main.humidity}%</span></h3>
  `
  document.querySelector(`.card-3`).insertAdjacentHTML(`afterbegin`, card3)

  let card4 = `
  <h3 id="wind">Wind Speed:<br> <span>${data.wind.speed} mph</span></h3>
  `
  document.querySelector(`.card-4`).insertAdjacentHTML(`afterbegin`, card4)

  let card5 = `
  <h3 id="min-max">High/Low:<br> <span>${data.main.temp_min}°/${data.main.temp_max}°</span></h3>
  `
  document.querySelector(`.card-5`).insertAdjacentHTML(`afterbegin`, card5)
}

// Event Listener

const searchButton = document.querySelector(`#search-button`)
searchButton.addEventListener("click", searchLocation)

// Remove
const removeMain = () => {
  const removeData = document.querySelector(".main-card")
  while (removeData.lastChild) {
    removeData.removeChild(removeData.lastChild)
  }
}

// const removeCard = () => {
//   const removeData = document.getElementsByTagName("h3")
//   while (removeData.firstChild) {
//     removeData.removeChild(removeData.firstChild)
//   }
// }

// const removeCard = () => {
//   const removeCard = document.getElementsByClassName(".card")
//   for (let i = 0; i < removeCard.length; i++) {
//     while (removeCard.children) {
//       removeCard.removeChild(removeCard.children)
//     }
//   }
// }

// Changing Background Images

let changeBackground = (data) => {
  let backImage = document.querySelector(".body")
  if (`${data.weather[0].main}` === `Clouds`) {
    backImage.style.background = url(
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    )
  } else if (`${data.weather[0].main}.value` === `Clear`) {
    backImage.style.background = url(
      "https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
    )
  } else if (`${data.weather[0].main}.value` === `Rain`) {
    backImage.style.background = url(
      "https://images.unsplash.com/photo-1518803194621-27188ba362c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80"
    )
  } else if (`${data.weather[0].main}.value` === `Thunder`) {
    backImage.style.background = url(
      "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    )
  } else if (`${data.weather[0].main}.value` === `Snow`) {
    backImage.style.background = url(
      "https://images.unsplash.com/photo-1453489629239-2d15752eb271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"
    )
  }
}
