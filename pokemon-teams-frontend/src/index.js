const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", () => {
    

    createDiv()
    getTrainers()
    getPokemons()
});


//get trainers $$
//show trainers$$
//get pokemon
//show pokemon


const createDiv = () => {
    const mainDiv = document.createElement('div')
    document.querySelector('main').appendChild(mainDiv)
}
const getTrainers = () => {
    fetch('http://localhost:3000/trainers')
    .then(res => res.json())
    .then(trainers => {
        //console.log(trainers)
        trainers.forEach(trainer => {
            createTrainer(trainer)
        })
    })
    
}

const createTrainer = (trainer) => {
    const trainerItem = document.createElement('div')
    trainerItem.setAttribute("class", "card")
    const trainerName = document.createElement('p')
    trainerName.innerHTML = trainer.name
    trainerItem.dataset.id = trainer.id
    document.querySelector('main').appendChild(trainerItem)
    trainerItem.appendChild(trainerName)

}


const getPokemons = () => {
    fetch('http://localhost:3000/pokemons')
    .then(res => res.json())
    .then(pokemons => {
        console.log(pokemons)
        pokemons.forEach(pokemon => {
            createPokemon(pokemon)
        })

    })
    
}

const createPokemon = (pokemon) => {
    const pokemonItem = document.createElement('p')
    pokemonItem.innerHTML = pokemon.species
    const trainerNode = pokemon.trainer_id
    document.querySelector(`[data-id = "${trainerNode}"]`).appendChild(pokemonItem)
}