import Navbar from './navbar/index';
import Menu from './menu/index';

import { useState } from 'react';

const MenuHeader = () => {
    const [activeNav, setActiveNav] = useState('')
    const [activeMenu, setactiveMenu] = useState('deactive')

    const handleNav = () => {
        setActiveNav(!activeNav)
        setactiveMenu(activeMenu === 'deactive' ? 'active' : 'deactive')
    }

  return (
    <>
      <Menu handleNavbarClick={handleNav} isActive={activeMenu}/>
      <Navbar  handleNavbarClick={handleNav} isActive={activeNav}/>
    </>
  );
}

export default MenuHeader;