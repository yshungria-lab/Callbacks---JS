const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

const opts = {
    crossDomain: true
}

$.get(lukeurl, opts, function (luke) {
    console.log(`Hola yo soy, ${luke.name}`)
})