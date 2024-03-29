import { useHistory } from 'react-router-dom';

import cn from 'classnames';

import s from './style.module.css';

const AboutPage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    return (
        <div className={s.wrapper}>
            <div className={s.poke_ball}></div>
            <h1 className={cn(s.header)}>
                In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
                To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. 
            </h1>
            <button className={cn("link_button")} onClick={handleClick}>
                Get Back
            </button>
        </div>   
    )
}

export default AboutPage;