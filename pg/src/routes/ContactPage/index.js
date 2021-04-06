import { useHistory } from 'react-router-dom';

import cn from 'classnames';

import s from './style.module.css';

const ContactPage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    return (
        <div className={s.wrapper}>
            <h1 className={cn(s.header)}>
                My gitHub: <a href='https://github.com/AlekRing' target='_blank'>Alek_Ring</a>
            </h1>
            <button className={cn("link_button")} onClick={handleClick}>
                Get Back
            </button>
        </div>   
    )
}

export default ContactPage;