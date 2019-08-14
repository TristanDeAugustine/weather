let city = document.querySelector('.search')

const createSearch = () => {
  let typedName = city.value
  let search = typedName
  const url = 'http://api.openweathermap.org/data/2.5/weather'
  const apiKey = '74652b269116515a06484190cbdffe93'
  const newUrl = url + '?' + 'q=' + search + '&appid=' + apiKey
  return newUrl
}
const weatherAndTemp = () => {
  fetch(createSearch())
    .then(response => {
      return response.json()
    })
    .then(city => {
      document.querySelector('.weather').textContent = city.weather[0].main

      document.querySelector('.temperature').textContent = city.main.temp
    })
}

document.querySelector('.button').addEventListener('click', weatherAndTemp)
