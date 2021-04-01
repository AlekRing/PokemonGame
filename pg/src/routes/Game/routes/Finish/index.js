import { useContext, useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../../components/pokemonCards";
import { FirebaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from './style.module.css'

const FinishPage = () => {
    const history = useHistory()
    let { isFinished } = useContext(PokemonContext)
    const { wictory } = useContext(PokemonContext)
    const {pokes} = useContext(PokemonContext)
    const { pokesPlayer2 } = useContext(PokemonContext)
    const firebase = useContext(FirebaseContext)
    const [idChosen, setidChosen] = useState(null)

    const [choosedPoke, setChoosedPoke] = useState({})
    const [isWictory, setIsWictory] = useState(wictory)

    const addChosedPoke = (poke, id) => {
        if (!wictory) return
        setChoosedPoke(poke)
        setidChosen(id)
    }


    const addPokeToTheBase = async () => {
        await firebase.addPokemon(choosedPoke, resetStyles)
    }

    const resetStyles = () => {
        setidChosen(null)
        setIsWictory(prev => !prev)
    }

    const goToNewGame = () => {
        history.replace('/game')
    }

    if (isFinished === false) {
        goToNewGame()
    }

    return (
        <>
            <div className={`${s.flex}`}>
                {
                    Object.values(pokes).map((poke) => (
                        <div className={s.card}>
                        <PokemonCard
                            key={poke.id}
                            type={poke.type}
                            id={poke.id}
                            name={poke.name}
                            values={poke.values}
                            img={poke.img}
                            possession={poke.possession}
                            minimize
                            active
                        />
                    </div>
                    ))
                }
            </div>
            <div className={s.btn_wrapper}>
                <button className={`link_button`} 
                    onClick={() => {goToNewGame()}}
                >
                    Finish Game
                </button>
            </div>
            <div className={s.title}>
                {wictory? `You can choose only 1 card to add to your collection`
                    : 'You lost! Try again)'}
            </div>
            <div className={s.btn_wrapper}>
                <button className={`link_button ${isWictory ? 'active' : 'disabled'}`} 
                    onClick={() => {addPokeToTheBase()}}
                    disabled={isWictory ? false : true}
                >
                    Add pokemon
                </button>
            </div>
            <div className={`${s.flex}`}>
                {
                    Object.values(pokesPlayer2).map((poke, id) => (
                        <div 
                            className={`${s.card} ${idChosen === id ? `${s.active}` : ''} ${s.choose_poke}`}
                            onClick={()=> {addChosedPoke(poke, id)}}
                        >
                        <PokemonCard
                            key={poke.id}
                            type={poke.type}
                            id={poke.id}
                            name={poke.name}
                            values={poke.values}
                            img={poke.img}
                            possession={poke.possession}
                            minimize
                            active
                        />
                    </div>
                    ))
                }
            </div>
        </>
    )
}

export default FinishPage;