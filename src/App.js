import { useEffect, useState } from 'react';
import './App.css';
import PokeCard from './PokeCard';
import axios from 'axios';

function App() {
  // let pokemons = [
  //   {name: "Pikachu", url: "https://raw.githubusercontent.com/PokeAPI/sprites/50dfe77b366c33987d05f3bceaa46401f8cb5c34/sprites/pokemon/other/dream-world/25.svg"},
  //   {name: "Charmendar", url: "https://raw.githubusercontent.com/PokeAPI/sprites/50dfe77b366c33987d05f3bceaa46401f8cb5c34/sprites/pokemon/other/dream-world/5.svg"},
  //   {name: "Bulbasaur", url: "https://raw.githubusercontent.com/PokeAPI/sprites/50dfe77b366c33987d05f3bceaa46401f8cb5c34/sprites/pokemon/other/dream-world/1.svg"},
  //   {name: "Catepillar", url: "https://raw.githubusercontent.com/PokeAPI/sprites/50dfe77b366c33987d05f3bceaa46401f8cb5c34/sprites/pokemon/other/dream-world/10.svg"},
  // ]

  let [pokemons, setpokemons] = useState([])

  function getPokemons(){
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(
      function handleThen(incoming_value) {
      console.log(incoming_value.data.results);
      setpokemons(incoming_value.data.results)
    })
    .catch(function handleCatch(err) {
      console.log(err);
    })
  }

  useEffect(function callsOnPageLoad() {
    getPokemons();
  })

  return (
    <>
        {
          pokemons.map(function (data, index){
            return <PokeCard name={data.name} url={`https://raw.githubusercontent.com/PokeAPI/sprites/50dfe77b366c33987d05f3bceaa46401f8cb5c34/sprites/pokemon/other/dream-world/${index + 1}.svg`} />
          })
        }
    </>

  );
}

export default App;
