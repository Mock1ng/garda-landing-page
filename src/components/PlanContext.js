import React, { createContext } from 'react';

export const PlanContext = createContext();

export const PlanProvider = props => {
    const basic = {
        title: 'BASIC',
        desc: 'Sangat cocok untuk para pengusaha baru',
        priceBefore: 7500,
        discount: 33,
        realPrice: 5000,
        services: [
            'Mencatat barang masuk',
            'Mencatat barang keluar',
            'Mencatat hasil keuntungan'
        ]
    }

    const business = {
        title: 'BUSINESS',
        desc: 'Paket yang tepat untuk bisnis menengah ke atas',
        priceBefore: 15000,
        discount: 40,
        realPrice: 9000,
        services: [
            'Mencatat barang masuk',
            'Mencatat barang keluar',
            'Mencatat hasil keuntungan',
            'Support 7x24 Jam'
        ]
    }

    const entrepreneur = {
        title: 'ENTREPRENEUR',
        desc: 'Pilihan terbaik untuk mengembangkan bisnis',
        priceBefore: 50000,
        discount: 50,
        realPrice: 12500,
        services: [
            'Mencatat barang masuk',
            'Mencatat barang keluar',
            'Mencatat hasil keuntungan',
            'Support 7x24 Jam',
            'Export data ke Excel',
            'AI prediksi penghasilan'
        ]
    }


    return (
        <PlanContext.Provider value={{ basic, business, entrepreneur }}>
            {props.children}
        </PlanContext.Provider>
    )
}