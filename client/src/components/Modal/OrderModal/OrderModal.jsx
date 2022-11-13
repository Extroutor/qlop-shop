import React from 'react';
import style from './OrderModal.module.scss'

const OrderModal = ({active, setActive, children}) => {

    return (
        <div className={active ? `${style.active} ${style.modal}` : style.modal}
             onClick={() => setActive(false)}>
            <div className={active ? `${style.content} ${style.active}` : style.content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>

    );
};

export default OrderModal;