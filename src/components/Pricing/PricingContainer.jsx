import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingContainer = ({pricingOptions}) => {
    const pricing = use(pricingOptions);
    // console.log(pricing)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                pricing.map(item => <PricingCard key={item.id} item={item}/>)
            }
        </div>
    );
};

export default PricingContainer;