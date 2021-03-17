import cn from 'classnames';

import s from './style.module.css';

const Menu = ({ isActive }) => {
  const ROUTES = [
    {
      route: '#welcome',
      title: 'HOME'
    },
    {
      route: '#game',
      title: 'GAME'
    },
    {
      route: '#about',
      title: 'ABOUT'
    },
    {
      route: '#contact',
      title: 'CONTACT'
    },
  ]

  return (
    <div class={cn(s.menuContainer, {
          [s.active]: isActive === true,
          [s.deactive]: isActive === false
        })}>
        <div class={cn(s.overlay)} />
        <div class={cn(s.menuItems)}>
          {ROUTES.map(route => {
            return (
              <ul>
                <li>
                  <a href={route.route}>
                    {route.title}
                  </a>
                </li>
              </ul>
            )
          })}
        </div>
    </div>
  );
}

export default Menu;