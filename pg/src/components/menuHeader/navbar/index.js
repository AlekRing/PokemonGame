import cn from 'classnames';

import s from './style.module.css';

const Navbar = ({ handleNavbarClick, isActive, bgActive = false }) => {

  return (
    <nav className={cn(s.root, {
      [s.bgActive]: bgActive
    })}>
        <div className={cn(s.navWrapper)}>
          <p className={cn(s.brand)}>
            LOGO
          </p>
          <div onClick={()=>{
              handleNavbarClick && handleNavbarClick()
            }}
            className={cn(s.menuButton, {[s.active]: isActive})}>
            <span />
          </div>
        </div>
    </nav>
  );
}

export default Navbar;