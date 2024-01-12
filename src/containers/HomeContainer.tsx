import '../App.css'
import { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const HomeContainer = () => {
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemonData, setPokemonData] = useState("");
    const [pokemonLocal, setPokemonLocal] = useState({
        name: "",
        species: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
    });

    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonData}`).then(
            (response)=>{
                console.log(response);
                setPokemonLocal({
                    name: pokemonData,
                    species: response.data.species.name,
                    img: response.data.sprites.front_default,
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    type: response.data.types[0].type.name,

                });
                setPokemonChosen(true);
        })

    }

    

    return (
        <div className='w-full'>
            <div className='TitleSection'>
                <h1>Pokemon Stats</h1>
                <Input type="text" 
                onChange={(event) => {
                    setPokemonData(event.target.value);
                }}/>
                <Button label={"Search Pokemon"} onClick={searchPokemon}>Search Pokemon</Button>
            </div>
            

            <Card>
                <div className='DisplaySection block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>{!pokemonChosen ? 
                    (<h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Please choose pokemon name</h1>
                    ) : (
                        <>
                            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemonLocal.name}</h1>
                            <img src={pokemonLocal.img} />
                            <h3 className='font-normal text-gray-700 dark:text-gray-400'>Species: {pokemonLocal.species}</h3>
                            <h3 className='font-normal text-gray-700 dark:text-gray-400'>Type: {pokemonLocal.type}</h3>
                            <h4 className='font-normal text-gray-700 dark:text-gray-400'>Hp: {pokemonLocal.hp}</h4>
                            <h4 className='font-normal text-gray-700 dark:text-gray-400'>Attack: {pokemonLocal.attack}</h4>
                            <h4 className='font-normal text-gray-700 dark:text-gray-400'>Defense: {pokemonLocal.defense}</h4>
                        </>
                        
                    )}

                </div>
            </Card>

            
            
        </div>
    );
}

export default HomeContainer;