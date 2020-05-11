import React, { useRef } from 'react';
import Login from '../Login';
const LoginButton = () => {

    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal();
    }

    return (
        <>
            <button className="nav-link login-button" onClick={openModal} >LOGIN</button>

            <Login ref={modalRef}>
                <div className="title">GARDA</div>
                <form>
                    <div className="form-group">
                        <input type="text" className='form-control' id='email-login' placeholder='Email' required />
                    </div>

                    <div className="form-group">
                        <input type='password' className='form-control' id='password' placeholder='Password' required />
                    </div>
                    <button className='login-button'>MASUK</button>
                </form>
                <a href="!#" className="forget-password">Lupa kata sandi?</a>
                <a href="!#" className="register">Belum punya akun? Daftar sekarang!</a>
            </Login>
        </>
    )
}

export default LoginButton
