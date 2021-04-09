import cn from 'classnames';
import { useEffect, useRef } from 'react';

import s from './style.module.css'

const Modal = ({ isOpen, title, children, oncloseModal}) => {

    const modalEl = useRef()

    const handleCloseModal = () => {
        oncloseModal && oncloseModal(false)
    }

    const handleClickRoot = (e) => {
        if ( !modalEl.current.contains(e.target) ) {
            handleCloseModal()
        }
    }

    useEffect(() => {
        document.querySelector('body').style.overflow =
            isOpen ? 'hidden' : null;
    }, [isOpen])

    return (
        <div className={cn(s.root, {
            [s.open]: isOpen})}
            onClick={handleClickRoot}    
        >
            <div
                ref={modalEl}
                className={s.modal}
            >
                <div className={s.head}>
        						{title}
                    <span 
                        className={s.btnClose}
                        onClick={handleCloseModal}
                    ></span>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;