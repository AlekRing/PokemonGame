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

    const [pokemonCards, setPokemonCards] = useState(JSON.parse(JSON.stringify(POKEMONCARDS)))

    console.log(pokemonCards === POKEMONCARDS)

    function revertCard(id) {
        setPokemonCards(prevState => prevState.filter(poke => {
            if (poke.id === id) {
                if (poke.active === undefined || poke.active === false) {
                    poke.active = true
                } else {
                    poke.active = !poke.active
                }
            }
            console.log(pokemonCards, POKEMONCARDS)

            return true;
        }))
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