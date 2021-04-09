import { useState } from "react"

import s from './style.module.css'

const LoginForm = ({ register, login }) => {

    const [isRegister, setIsRegister] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isRegister) {
            register && register({
                email,
                password
            })
        } else {
            login && login({
                email,
                password
            })
        }
        
        setEmail('')
        setPassword('')
    }

    const handleClickChangeLog = () => {
        console.log('Hello')
        setIsRegister(p => !p)
    }

    return (
        <form 
            className={s.form}
            onSubmit={handleSubmit}
        >
            <div>
                <input
                    required
                    label='Email'
                    className={s.input}
                    placeholder={'email'}
                    value={email}
                    type='email'
                    name='email' 
                    onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div>
                <input
                    required
                    label='Password'
                    className={s.input}
                    placeholder={'password'}
                    value={password}
                    type='password' 
                    name='password' 
                    onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <div className={s.submitAndChange}>
                <button 
                    className={`link_button`}
                    id={s.btn}
                >
                    {isRegister ? 'Register':'Login' }
                </button>
                <div 
                    onClick={handleClickChangeLog}
                    className={s.registerOrLogin}
                >
                    {isRegister ? 'Login?' : 'Register?'}
                </div>
            </div>
            
        </form>
    )
}

export default LoginForm