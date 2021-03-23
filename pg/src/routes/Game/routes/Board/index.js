import { useContext } from 'react';
import PokemonCard from '../../../../components/pokemonCards';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

const BoardPage = () => {
    const {pokes} = useContext(PokemonContext)

    console.log(pokes)

    return (
        <div className={s.root}>
			<div className={s.playerOne}>
                {
                    Object.values(pokes).map(poke => {
                         return <PokemonCard
                            className={s.card}
                            key={poke.id}
                            type={poke.type}
                            id={poke.id}
                            name={poke.name}
                            count={poke.count}
                            values={poke.values}
                            img={poke.img}
                            minimize
                            active
                        />
                    })
                }
			</div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;