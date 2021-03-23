import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../../../components/pokemonCards/index'

import cn from 'classnames';
import s from '../../style.module.css';
import { FirebaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';


const StartPage = () => {
    const firebase = useContext(FirebaseContext)
    const pokemonContext = useContext(PokemonContext)
    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    const [pokemonCards, setPokemonCards] = useState({})

    useEffect(()=> {
        firebase.getPokemonSoket((pokemons) => {
            setPokemonCards(pokemons)
        })

        return () => firebase.offPokemonSoket()
    }, [])

    const revertCard = (key) => {
        const poke = {...pokemonCards[key]}
        pokemonContext.selectPoke(key, poke)

        setPokemonCards(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const startGame = () => {
        history.push("/game/board")
    }

    return (
        <div className={cn(s.game_page)}>
            <button className={cn("link_button")} 
                    onClick={() => {startGame()}}
                    disabled={Object.keys(pokemonContext.pokes).length < 5}
            >
                Start Game
            </button>
            <button className={cn("link_button")} onClick={handleClick}>
                Get Back
            </button>
            <div className={s.flex}>
                { Object.entries(pokemonCards).map(([key, poke]) => {
                  return (
                    <PokemonCard
                        className={s.card}
                        key={key}
                        type={poke.type}
                        id={poke.id}
                        name={poke.name}
                        count={poke.count}
                        values={poke.values}
                        img={poke.img}
                        active={true}
                        isSelected={poke.selected}
                        revertCard={()=> {
                            if (Object.keys(pokemonContext.pokes).length < 5 || poke.selected) {
                                revertCard(key)
                            }
                        }}
                    />
                  )
                })}
            </div>
        </div>   
    )
}

export default StartPage;