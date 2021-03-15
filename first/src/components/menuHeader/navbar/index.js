import cn from 'classnames';

import s from './style.module.css';

const Navbar = ({ handleNavbarClick, isActive }) => {

  return (
    <nav class={cn(s.root)}>
        <div class={cn(s.navWrapper)}>
          <p class={cn(s.brand)}>
            LOGO
          </p>
          <a onClick={()=>{
              handleNavbarClick && handleNavbarClick()
            }}
            class={cn(s.menuButton, [isActive ? s.active : ''])}>
            <span />
          </a>
        </div>
    </nav>
  );
}

export default Navbar;