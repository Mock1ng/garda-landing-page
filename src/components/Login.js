import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

const Login = forwardRef((props, ref) => {

    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            closeModal: () => close()
        }
    });

    const open = () => setDisplay(true);
    const close = () => setDisplay(false);


    if (display) {

        return ReactDOM.createPortal(
            <div className='login-wrapper'>
                <div className="login-form">
                    <div className="close-btn" onClick={close}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    {props.children}
                </div>
            </div>,
            document.getElementById('modal-root')
        )
    }

    return null
})

export default Login
