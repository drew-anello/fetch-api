console.log('connected')

const URL = 'https://www.omdbapi.com/?apikey=151680d4&t='
// console.log(URL)

///////////////////////
//  cached elements/ element reference
/////////////////////
const titleEl = document.getElementById('title')
const yearEl = document.getElementById('year')
const ratedEl = document.getElementById('rated')
const formEl = document.querySelector('form')
const inp = document.getElementById('imp')

formEl.addEventListener('click', handleGetData)

function handleGetData (e) {
  e.preventDefault()
  console.log(e.target)
  fetch(URL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      titleEl.textContent = data.Title
      yearEl.textContent = data.Year
      ratedEl.textContent = data.Rated
      console.log(data)
    })
    .catch(function (error) {
      console.log('were broken')
    })
}
///////////////////////
//  Event listeners
/////////////////////

///////////////////////
//  functions
/////////////////////
