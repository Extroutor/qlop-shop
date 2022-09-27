import React from 'react';
import style from './Modal.module.scss'

const Modal = ({active, setActive, children}) => {
    return (
        // либо className={active ? [style.active, style.modal].join(' ') : style.modal}
        // либо className={active ? `${style.active} ${style.modal}` : style.modal}
        <div className={active ? `${style.active} ${style.modal}` : style.modal}
             onClick={() => setActive(false)}>
            <div className={active ? `${style.content} ${style.active}` : style.content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;