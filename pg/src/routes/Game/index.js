import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../components/pokemonCards/index'
import database from '../../services/firebase';

import cn from 'classnames';
import s from './style.module.css';

const GamePage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    const [pokemonCards, setPokemonCards] = useState({})

    useEffect(()=> {
        database.ref('pokemons').once('value', (snapshot)=> {
            setPokemonCards(snapshot.val())
          })
    }, [])

    useEffect(()=> {
        Object.entries(pokemonCards).map(([key, poke]) => {
            if (poke.active === true) {
                console.log(poke)
                database.ref('pokemons/' + key).set(poke)
            }
        })
        
    }, [pokemonCards])

    function revertCard(id) {
        setPokemonCards(prevState => {
            return Object.entries(prevState).reduce((acc, poke)=>{
                const pokemon = {...poke[1]}
                if (pokemon.id === id) {
                    pokemon.active = true;
                };
                acc[poke[0]] = pokemon
                return acc
            }, {})
        })
    }


    function addPokemon() {
        const data = Object.entries(pokemonCards)[0][1]
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(data);
    }

    return (
        <div className={cn(s.game_page)}>
            <button className={cn("link_button")} onClick={addPokemon}>
                Add pokemon
            </button>
            <button className={cn("link_button")} onClick={handleClick}>
                Get Back
            </button>
            <div className={s.flex}>
                { Object.entries(pokemonCards).map(([key, poke]) => {
                  return (
                    <PokemonCard
                      key={key}
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
        </div>   
    )
}

export default GamePage;