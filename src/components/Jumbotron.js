import React from 'react';
import jumbotron1 from '../assets/svgs/jumbotron1.svg';
import jumbotron2 from '../assets/svgs/jumbotron2.svg';
import imgJumbotron2 from '../assets/imgs/img-jumbotron2.png';

const Jumbotron = () => {
    return (
        <div className='custom-jumbotron'>
            <img src={jumbotron1} alt="Ilus" className='ilus-jumbotron1' />
            <div className="container">
                <div className="content">
                    <h1>Povider ERP Terbaik</h1>
                    <p>Garda ERP, memecahkan segala masalah bisnis baik itu
                    pengadaan, manufaktur, pelayanan, penjualan, dan finansial.</p>
                </div>
            </div>
            <img src={imgJumbotron2} alt="working" className='img-jumbotron2' />
            <img src={jumbotron2} alt="ilus2" className='ilus-jumbotron2' />
        </div>
    )
}

export default Jumbotron
