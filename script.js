console.log('connected')
const URL = 'https://www.omdbapi.com/?apikey=151680d4&t='
const titleEl = document.getElementById('title')
const yearEl = document.getElementById('year')
const ratedEl = document.getElementById('rated')
const formEl = document.querySelector('form')
const inputEl = document.getElementById('inp')
const mainEl = document.querySelector('main')

formEl.addEventListener('submit', function handleGetData (e) {
  e.preventDefault()

  // console.log(e.target)
  fetch(URL + inputEl.value)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      titleEl.textContent = data.Title
      yearEl.textContent = data.Year
      ratedEl.textContent = data.Rated
      const imgEl = document.createElement('img')
      imgEl.src = data.Poster
      imgEl.alt = data.Title
      mainEl.appendChild(imgEl)

      console.log(data)
    })
    .catch(function (error) {
      console.log('were broken')
    })
})
