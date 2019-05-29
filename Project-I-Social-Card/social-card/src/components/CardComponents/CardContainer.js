import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContentHeader from './CardContent';
import CardContentP from './CardContenP'
import CardContentA from './CardLink';

const CardContainer = () => {
    return (
        <div className='card-container'>
            <CardBanner />
            <CardContentHeader />
            <CardContentP />
            <CardContentA />
        </div>
    )
}

export default CardContainer;