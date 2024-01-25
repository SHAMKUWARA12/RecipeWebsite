import React from 'react';
import HomeCarousel from './HomeCarousel';

const HomeFeatures = () => {
    return (
        <>
            <section className='features'>
                <h1 className='text-center pt-5'>Featured Recipies</h1>
                <HomeCarousel />
            </section>
        </>
    )
}
export default HomeFeatures;