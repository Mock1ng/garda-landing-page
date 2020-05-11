import React from 'react';
import imgAbout1 from '../assets/imgs/img-about1.png';

const About = () => {

    return (
        <div className='about' id='about'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm about-content-wrapper">
                        <div className="about-content">
                            <h2>Garda:<br />Solusi Terbaik untuk <br /> Manajemen Perusahaan</h2>
                            <p>Garda adalah penyedia layanan sistem ERP dengan solusi
                            terlengkap dalam satu aplikasi yang telah dipercaya oleh
                            lebih dari 1.000 perusahaan dalam dan luar negeri di seluruh dunia.</p>
                        </div>
                    </div>
                    <div className="col-sm about-img-wrapper">
                        <img src={imgAbout1} alt="working" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
