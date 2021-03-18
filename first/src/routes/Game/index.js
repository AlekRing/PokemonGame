import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../components/pokemonCards/index'
import { POKEMONCARDS } from '../../components/data/cards';

import cn from 'classnames';
import s from './style.module.css';

const GamePage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    const [pokemonCards, setPokemonCards] = useState(()=>{
        const tempPokeCards = POKEMONCARDS;
        tempPokeCards.map(poke => {
            return poke.active = !!poke.active
        })
        return tempPokeCards
    })

    function revertCard(id) {
        const newPokeCard = pokemonCards;

        newPokeCard.map(poke => {
            if(poke.id === id) poke.active = !poke.active
        })

        setPokemonCards(newPokeCard);
        console.log(pokemonCards, 'pokemonCards'.toUpperCase())
    }


    return (
        <>
            <div className={s.flex}>
                <button className={cn("link_button")} onClick={handleClick}>
                    Get Back
                </button>
                {pokemonCards.map(poke => {
                  return (
                    <PokemonCard
                      key={poke.id}
                      type={poke.type}
                      id={poke.id}
                      name={poke.name}
                      count={poke.count}
                      values={poke.values}
                      img={poke.img}
                      active={poke.active}
                      revertCard={revertCard}
                    />
                  )
                })}
            </div>
        </>   
    )
}

export default GamePage;