import React from 'react';

const Pokecard = ({name, image, type}) =>(
    <div>
        <h4>{name}</h4>
        <img src = {image} alt=""/>
        <p>{type}</p>
    </div>
)

export default Pokecard;