import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../../../components/pokemonCards';
import { PokemonContext } from '../../../../context/pokemonContext';
import PlayerBoard from './component/board';

import s from './style.module.css';

const counterWin = (board, firstPlayer, secPlayer) => {
    let firstPlayerCount = firstPlayer.length
    let secPlayerCount = secPlayer.length

    board.forEach(el => {
        if (el.card.possession === 'red') {
            firstPlayerCount++
        }

        if (el.card.possession === 'blue') {
            secPlayerCount++
        }

        return [firstPlayerCount, secPlayerCount]
    });
}


const BoardPage = () => {
    const {pokes} = useContext(PokemonContext)

    const [board, setBoard] = useState([])
    const [firsPlayer, setFirstPlayer] = useState(() => {
        return Object.values(pokes).map(c => ({
            ...c,
            possession: 'blue',
        }))
    })
    const [secPlayer, setSeqPlayer] = useState([])
    const [chooseCard, setChooseCard] = useState(null)
    const [step, setStep] = useState(0)
    const history = useHistory();

    if (Object.keys(pokes).length === 0) {
        history.replace('/game')
    }

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board')
        const boardreq = await boardResponse.json()

        setBoard(boardreq.data)

        const secPlayerResponse = await fetch('https://reactmarathon-api.netlify.app/api/create-player')
        const secPlayerReq = await secPlayerResponse.json()

        setSeqPlayer(() => {
            return secPlayerReq.data.map(c => ({
                ...c,
                possession: 'red'
            }))
        })
    }, [])

    const setCardonBoard = async (position) => {
        if (chooseCard) {
            const params = {
                position,
                card: chooseCard,
                board,
            }

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (chooseCard.player === 1) {
                setFirstPlayer(prevstate => prevstate.filter(i => i.id !== chooseCard.id))
            }
            if (chooseCard.player === 2) {
                setSeqPlayer(prevstate => prevstate.filter(i => i.id !== chooseCard.id))
            }

            setBoard(request.data)

            setStep(prevstate => {
                const count = prevstate + 1
                return count
            })
        }
    }

    useEffect(() => {
        if (step === 9) {
            const [count1, count2] = counterWin(board, firsPlayer, secPlayer)
        
            if (count1 > count2) {
                alert('WIN')
            } else if (count2 > count1) {
                alert('LOSE')
            } else alert('nice')

            history.push('game/finish')
        }
    }, [step])

    return (
        <div className={s.root}>
			<div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={firsPlayer} 
                    onClickCard={(card)=> setChooseCard(card)}
                />
			</div>
            <div className={s.board}>
                {
                    board.map((c => {
                        return (
                            <div 
                                key={s.position}
                                className={s.boardPlate}
                                onClick={() => !c.card && setCardonBoard(c.position)}
                            >
                                {
                                    c.card && <PokemonCard { ...c.card } active minimize />
                                }
                            </div>
                        )
                    }))
                }
            </div>
			<div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={secPlayer}
                    onClickCard={(card)=> setChooseCard(card)}
                />
            </div>
        </div>
    );
};

export default BoardPage;