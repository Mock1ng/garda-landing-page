import React, { useContext } from 'react';
import { PlanContext } from '../contexts/PlanContext';
import PriceCard from './PriceCard';

const PriceList = () => {
    const value = useContext(PlanContext);
    const basic = value.basic;
    const business = value.business;
    const entrepreneur = value.entrepreneur;


    return (
        <div className='price' id='price-list'>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-6 offset-sm-3">
                        <h2>Price List</h2>
                        <p>Terdapat 3 pilihan utama yang telah disesuaikan dengan setiap kebutuhan. Pilihlah paket yang pas dengan anda dan miliki fitur yang ditawarkan!</p>
                    </div>
                </div>
                <div className="card-wrapper">
                    <PriceCard key={basic.title} title={basic.title} desc={basic.desc} priceBefore={basic.priceBefore} discount={basic.discount} realPrice={basic.realPrice} services={basic.services} />
                    <PriceCard key={business.title} title={business.title} desc={business.desc} priceBefore={business.priceBefore} discount={business.discount} realPrice={business.realPrice} services={business.services} />
                    <PriceCard key={entrepreneur.title} title={entrepreneur.title} desc={entrepreneur.desc} priceBefore={entrepreneur.priceBefore} discount={entrepreneur.discount} realPrice={entrepreneur.realPrice} services={entrepreneur.services} />
                </div>
            </div>
        </div>
    )
}

export default PriceList
