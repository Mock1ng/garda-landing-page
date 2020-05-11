import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="footer-about">
                                <div className="head">GARDA</div>
                                <div className="desc">Penyedia solusi ERP dengan rangkaian software terlengkap untuk berbagai jenis industri, yang dapat disesuaikan dengan kebutuhan setiap bisnis.</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="tentang-kami">
                                <h5 className='head'>TENTANG KAMI</h5>
                                <ul>
                                    <li>Perusahaan</li>
                                    <li>Karir</li>
                                    <li>Blog</li>
                                    <li>Kebijakan Privasi</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="socmed">
                                <h5 className="head">IKUTI KAMI</h5>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row copyright">
                <div className="container">
                    <h5>&copy; 2020 GARDA. All Rights Reserved</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
