import { useState } from 'react';
import PokemonCard from '../../../../../../components/pokemonCards';

import s from './style.module.css'
import cn from 'classnames'

const PlayerBoard = ({ player, cards, onClickCard }) => {
    const [isSelected, setSelected] = useState(null)
    return (
        <>
            {
                cards.map((poke) => (
                    <div className={cn(s.cardBoard,
                        {
                            [s.selected]: (isSelected === poke.id)
                        }
                    )}
                    onClick={() => {
                        setSelected(poke.id)
                        onClickCard && onClickCard({
                            player,
                            ...poke,
                        })
                    }}
                >
                    <PokemonCard
                        key={poke.id}
                        type={poke.type}
                        id={poke.id}
                        name={poke.name}
                        values={poke.values}
                        img={poke.img}
                        minimize
                        active
                    />
                </div>
                ))
            }
        </>
    )
}

export default PlayerBoard;
