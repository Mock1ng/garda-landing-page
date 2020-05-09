import React from 'react';
import jumbotron1 from '../assets/svgs/jumbotron1.svg';
import jumbotron2 from '../assets/svgs/jumbotron2.svg'

const Jumbotron = () => {
    return (
        <div className='custom-jumbotron'>
            <img src={jumbotron1} alt="Ilus" />
            <div className="content">
                <h1>Jumbotron</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatibus ea dicta itaque consectetur ipsa.</p>
            </div>
            <img src={jumbotron2} alt="ilus2" className='jumbotron2' />
        </div>
    )
}

export default Jumbotron
