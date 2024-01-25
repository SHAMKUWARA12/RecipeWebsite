import React from 'react';
import asp1 from '../../Images/asp1.jpg'
const AboutMission = () => {
    return (
        <>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-12 col-md-6'>
                        <img src={asp1} alt="Food" className="img-fluid heroimg resimg rounded img_animated" />

                    </div>
                    <div className='col-12 col-md-6 resblock'>
                        <h1>About mission </h1>
                        <p className="my-4 pb-3 fs-4">Our mission is to inspire and bring people together through the joy of cooking, fostering a global community that shares the love for diverse cuisines.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutMission;