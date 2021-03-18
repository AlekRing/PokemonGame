import Navbar from './navbar/index';
import Menu from './menu/index';

import { useState } from 'react';

const MenuHeader = ({ bgActive }) => {
    const [active, setactive] = useState(null)

    const handleNav = () => {
      setactive(prevState => !prevState)
    }

  return (
    <>
      <Menu isActive={active} handleNavbarClick={handleNav} />
      <Navbar handleNavbarClick={handleNav} isActive={active}
        bgActive={bgActive}
      />
    </>
  );
}

export default MenuHeader;