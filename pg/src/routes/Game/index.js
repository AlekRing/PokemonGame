import { useState } from 'react';
import { useRouteMatch, Switch, Route} from 'react-router-dom';
import { PokemonContext } from '../../context/pokemonContext';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import StartPage from './routes/Start';

const GamePage = () => {
    const [selectedPokes, setSelectedPokes] = useState({})
    const [player2Pokes, setPlayer2Pokes] = useState([])
    const [isFinished, setIsFinished] = useState(false)

    const match = useRouteMatch();

    const handlePokeSelection = (key, poke) => {
        setSelectedPokes(prevState => {
            if (prevState[key]) {
                const temp = {...prevState}
                delete temp[key]

                return temp;
            }

            return {
                ...prevState,
                [key]: poke
            }
        })
    }

    const addSecPlayerPokes = (pokes) => {
        setPlayer2Pokes(pokes)
    }

    const finishGame = () => {
        setIsFinished(prevState => !prevState)
    }

    return (
        <PokemonContext.Provider value={{
            pokes: selectedPokes,
            pokesPlayer2: player2Pokes,
            selectPoke: handlePokeSelection,
            addplayer2Pokes: addSecPlayerPokes,
            isFinished: isFinished,
            finishGame: finishGame,
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;