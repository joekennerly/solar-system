const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")
const eg1 = document.createElement('h1')
eg1.innerText = "Example 1"
planetEl.appendChild(eg1)

planets.forEach(planet => planetEl.innerHTML += `<div>${planet}</div>`)

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const eg2 = document.createElement('h1')
eg2.innerText = "Example 2"
planetEl.appendChild(eg2)

let capitals = planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1))

capitals.forEach(thing => planetEl.innerHTML += `<div>${thing}</div>`)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const eg3 = document.createElement('h1')
eg3.innerText = "Example 3"
planetEl.appendChild(eg3)

let ePlanets = planets.filter(planet => planet.includes('e'))

ePlanets.forEach(planet => planetEl.innerHTML += `<div>${planet}</div>`)
