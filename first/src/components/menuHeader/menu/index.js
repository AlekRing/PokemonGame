import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './style.module.css';

const Menu = ({ isActive, handleNavbarClick }) => {
  const ROUTES = [
    {
      route: '/home',
      title: 'HOME'
    },
    {
      route: '/game',
      title: 'GAME'
    },
    {
      route: '/about',
      title: 'ABOUT'
    },
    {
      route: '/contact',
      title: 'CONTACT'
    },
  ]

  return (
    <div className={cn(s.menuContainer, {
          [s.active]: isActive === true,
          [s.deactive]: isActive === false
        })}>
        <div className={cn(s.overlay)} />
        <div className={cn(s.menuItems)}>
          <ul>
            {ROUTES.map((route, id) => {
              return (
                <li key={id}>
                  <Link to={route.route} onClick={()=>{
                    handleNavbarClick()
                  }}>
                    {route.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
    </div>
  );
}

export default Menu;