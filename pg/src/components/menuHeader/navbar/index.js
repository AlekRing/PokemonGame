import cn from 'classnames';
import { useHistory } from 'react-router';

import s from './style.module.css';

const Navbar = ({ handleNavbarClick, isActive, bgActive = false }) => {
  const history = useHistory()

  const handleNav = () => {
    history.push('/')
  }


  return (
    <nav className={cn(s.root, {
      [s.bgActive]: bgActive
    })}>
        <div className={cn(s.navWrapper)}>
          <p 
            onClick={()=> {handleNav()}}
            className={cn(s.brand)} 
          />
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