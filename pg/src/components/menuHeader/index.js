import Navbar from './navbar/index';
import Menu from './menu/index';

import {NotificationManager} from 'react-notifications';

import { useState } from 'react';
import Modal from '../modal';
import LoginForm from '../loginForm';

const MenuHeader = ({ bgActive }) => {
    const [active, setactive] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(null)

    const handleNav = () => {
      setactive(prevState => !prevState)
    }

    const handleClickLogin = () => {
      setIsModalOpen(prevState => !prevState)
    }

    const handleSubmitRegister = async ({ email, password}) => {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            returnSecurityToken: true,
        })
      }
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtFYeyihpoAkceA4_8rL_IdmJWo9Vz00o'
        , requestOptions).then(res => res.json())
      
        if (response.hasOwnProperty('error')) {
          NotificationManager.error(response.error.message, 'Oops...')
        } else {
          localStorage.setItem('idToken', response.idToken)
          NotificationManager.success('Sign up complete successfully')
        }
    }

    const handleSubmitLogin = async ({ email, password}) => {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            returnSecurityToken: true,
        })
      }
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtFYeyihpoAkceA4_8rL_IdmJWo9Vz00o'
        , requestOptions).then(res => res.json())
      
        if (response.hasOwnProperty('error')) {
          NotificationManager.error(response.error.message, 'Oops...')
        } else {
          localStorage.setItem('idToken', response.idToken)
          NotificationManager.success('Sign up complete successfully')
        }
    }

  return (
    <>
      <Menu isActive={active} handleNavbarClick={handleNav} />
      <Navbar 
        handleNavbarClick={handleNav}
        isActive={active}
        bgActive={bgActive}
        onClickLogin={handleClickLogin}
      />
      <Modal
            isOpen={isModalOpen}
            title={'Sign up'}
            oncloseModal={handleClickLogin}
          >
          <LoginForm
            register={handleSubmitRegister}
            login={handleSubmitLogin}
          />
      </Modal>
    </>
  );
}

export default MenuHeader;