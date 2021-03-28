import { useContext, useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../../components/pokemonCards";
import { FirebaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from './style.module.css'

const FinishPage = () => {
    const history = useHistory()
    let { isFinished } = useContext(PokemonContext)
    const {pokes} = useContext(PokemonContext)
    const { pokesPlayer2 } = useContext(PokemonContext)
    const firebase = useContext(FirebaseContext)
    const [gameIsFinished, setgameIsFinished] = useState(false)
    const [idChosen, setidChosen] = useState(null)

    const [choosedPoke, setChoosedPoke] = useState({})

    if (isFinished === false) {
        history.replace('/game')
    }

    const addChosedPokeToPlayer1 = (poke, id) => {
        setChoosedPoke(poke)
        setidChosen(id)
        setgameIsFinished(true)
    }

    const finishgame = async (poke) => {
        console.log('finished')
        await firebase.addPokemon(choosedPoke, goToNewGame)

        // PokemonContext
    }

    const goToNewGame = () => {
        history.replace('/game')
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
                <button className={`link_button ${gameIsFinished ? 'active' : 'disabled'}`} 
                    onClick={() => {finishgame()}}
                    disabled={gameIsFinished ? false : true}
                >
                    Finish Game
                </button>
            </div>
            <div className={`${s.flex}`}>
                {
                    Object.values(pokesPlayer2).map((poke, id) => (
                        <div 
                            className={`${s.card} ${idChosen === id ? `${s.active}` : ''}`}
                            onClick={()=> {addChosedPokeToPlayer1(poke, id)}}
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