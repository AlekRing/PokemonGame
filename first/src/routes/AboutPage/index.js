import { useHistory } from 'react-router-dom';

import cn from 'classnames';

import s from './style.module.css';

const AboutPage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    return (
        <>
            <h1 className={cn(s.header)}>
                this is ABOUT page!
            </h1>
            <button className={cn("link_button")} onClick={handleClick}>
                Get Back
            </button>
        </>   
    )
}

export default AboutPage;