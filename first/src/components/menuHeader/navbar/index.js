import cn from 'classnames';

import s from './style.module.css';

const Navbar = ({ handleNavbarClick, isActive, bgActive = false }) => {

  return (
    <nav id={s.navbar} class={cn(s.root, {
      [s.bgActive]: bgActive
    })}>
        <div class={cn(s.navWrapper)}>
          <p class={cn(s.brand)}>
            LOGO
          </p>
          <div onClick={()=>{
              handleNavbarClick && handleNavbarClick()
            }}
            class={cn(s.menuButton, {[s.active]: isActive})}>
            <span />
          </div>
        </div>
    </nav>
  );
}

export default Navbar;