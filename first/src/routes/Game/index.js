import react from 'react';

import cn from 'classnames';

import s from './style.module.css';

const GamePage = ({ onChangePage }) => {

    const handleClick = () => {
        onChangePage && onChangePage("home")
    }

    return (
        <>
            <h1 className={cn(s.header)}>
                this is page!
            </h1>
            <button className={cn("link_button")} onClick={handleClick}>
                Get Back
            </button>
        </>   
    )
}

export default GamePage;