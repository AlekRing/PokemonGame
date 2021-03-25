import { useState } from 'react';
import { useRouteMatch, Switch, Route} from 'react-router-dom';
import { PokemonContext } from '../../context/pokemonContext';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import StartPage from './routes/Start';

const GamePage = () => {
    const [selectedPokes, setSelectedPokes] = useState({})
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

    return (
        <PokemonContext.Provider value={{
            pokes: selectedPokes,
            selectPoke: handlePokeSelection
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