import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({characters}) => {

    return (
        <div>
            <h1>Pokedex</h1>
            {characters.map( c => (
                <Pokecard name = {c.name} 
                image = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c.id}.png`}
                type = {c.type} />
            ))}
            
        </div>
    )
}

export default Pokedex;