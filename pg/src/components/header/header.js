import { useHistory } from 'react-router-dom';

import cn from 'classnames';

import s from './header.module.css';

const Header = ({ title, descr }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/game');
    }

    return (
        <>
            <header className={s.root}>
                <div className={s.forest}></div>
                <div className={s.silhouette}></div>
                <div className={s.moon}></div>
                <div className={s.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <button className={cn("link_button")} onClick={handleClick}>
                        Start Game!
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;