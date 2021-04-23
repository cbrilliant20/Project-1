# Project Overview

## Project Name

Weather App

## Project Description

https://cbrilliant20.github.io/Weather-App/

The Weather App will take a location (city or zipcode) input from a user and return the current weather for that geo. By leveraging the OpenWeather API, we can ensure our users are recieving the most up to date weather information avaialable.

## API and Data Sample

OpenWeather API - https://openweathermap.org/current

```
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
```

## Wireframes

**_ https://wireframe.cc/bVdiov _**

### MVP/PostMVP

MVP

- Use OpenWeather API for location based weather data. Data to be used outline in wireframe.
- Leverage user input field to retrieve desired weather information
- Update page background based on current wearther description. I.e. Clear Sky changes to a background iamge of a clear sky.

PostMVP

- Drop down for incompleted string inputs (I.e. User Input = Salem, drop down menu for all options containing Salem.)
- 5 Day forecast
- Interactive Weather Map

## Project Schedule

| Day         | Deliverable                                        | Status     |
| ----------- | -------------------------------------------------- | ---------- |
| April 16-18 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| April 19    | Project Approval                                   | Complete   |
| April 20    | Core HTML and JS PsuedoCode                        | Complete   |
| April 20    | JS Code, API                                       | Complete   |
| April 21    | Core App Finalized, Base CSS Themes                | Complete   |
| April 22    | Dyanmic CSS, MVP                                   | Complete   |
| April 23    | Presentations                                      | Incomplete |

## Priority Matrix

https://wireframe.cc/FAdp0A

## Timeframes

| Component                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Project Approval                     |    H     |      2hr       |      2hr      |     2hr     |
| API Research                         |    H     |      3hr       |      2hr      |     2hr     |
| PsuedoCode                           |    H     |      2hr       |      1HR      |     1hr     |
| HTML Structure                       |    H     |      2hr       |      2hr      |     2hr     |
| API Setup                            |    H     |      3hrs      |      3HR      |     3hr     |
| Search Functionality                 |    H     |      3hrs      |      2HR      |     2hr     |
| API - Mainbox, city/description/icon |    H     |      3hrs      |      2HR      |     2hr     |
| API - Bottom cards                   |    H     |      3hr       |      3HR      |     3hr     |
| Append to DOM                        |    H     |      3hrs      |      2HR      |     2hr     |
| Styling backgrounds                  |    L     |      3hr       |      2HR      |     2hr     |
| Styling cards                        |    L     |      2hr       |      2HR      |     2hr     |
| Styling fonts, formating etc.        |    L     |      3hr       |      3HR      |     3hr     |
| Styling Form                         |    H     |      3hr       |      3HR      |     3hr     |
| Media Query                          |    H     |      2hr       |      3HR      |     3hr     |
| Total                                |    H     |     37hrs      |     32hr      |    32hr     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
const removeMain = () => {
  const removeData = document.querySelector(".main-card")
  while (removeData.lastChild) {
    removeData.removeChild(removeData.lastChild)
  }
  const removeCard = document.querySelectorAll(".card-container")
  for (let i = 0; i < removeCard.length; i++) {
    while (removeCard[i].firstChild) {
      removeCard[i].removeChild(removeCard[i].firstChild)
    }
  }
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

Changed some of the data points due to API accessability.
