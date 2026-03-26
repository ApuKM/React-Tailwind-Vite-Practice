import React from 'react';
import { Suspense } from 'react';
import PricingContainer from './PricingContainer';

const pricingOptions = fetch("/pricing.json").then(res => res.json());

const PricingOption = () => {
    return (
        <div className='w-[11/12] md:w-[80%] mx-auto mt-10 md:mt-20'>
            <h2 className='text-5xl font-semibold text-center mb-8'>Get Membership</h2>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <PricingContainer pricingOptions={pricingOptions}/>
            </Suspense>
        </div>
    );
};

export default PricingOption;