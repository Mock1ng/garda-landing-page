import React from 'react'

const PriceCard = ({ title, desc, priceBefore, discount, realPrice, services }) => {

    return (
        <div className='custom-card'>
            <h3 className='title'>{title}</h3>
            <p className='desc'>{desc}</p>
            <div className="harga">
                <div className="addition">
                    <h5 className='price-before'>{priceBefore}<span>k</span></h5>
                    <h5 className='discount'>Diskon {discount}%</h5>
                </div>
                <h3 className='real-price'>{realPrice}<span>k</span></h3>
            </div>
            <ul className='services'>
                {services.map((item, i) => (
                    <li className='service' key={i}>{item}</li>
                ))}
            </ul>
            <button className='buy-button'>Beli</button>
        </div>
    )
}

export default PriceCard
