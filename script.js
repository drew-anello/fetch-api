console.log('connected')

const URL = 'https://www.omdbapi.com/?apikey=151680d4&t=titan'
// console.log(URL)

///////////////////////
//  cached elements/ element reference
/////////////////////
fetch(URL)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log('were broken')
  })
///////////////////////
//  Event listeners
/////////////////////

///////////////////////
//  functions
/////////////////////
