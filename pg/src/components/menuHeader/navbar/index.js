import cn from 'classnames';
import { useHistory } from 'react-router';

import s from './style.module.css';

import {ReactComponent as LoginSVG} from '../../../assets/login.svg'

const Navbar = ({ handleNavbarClick, isActive, bgActive = false, onClickLogin }) => {
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
          <div className={s.loginAndNavbar}>
            <div className={s.login_wrapper}
              onClick={()=>{onClickLogin()}}  
            >
              <LoginSVG />
            </div>
            <div onClick={()=>{
              handleNavbarClick && handleNavbarClick()
            }}
              className={cn(s.menuButton, {[s.active]: isActive})}>
              <span />
            </div>
          </div>
        
        </div>
    </nav>
  );
}

export default Navbar;