import React from 'react';
import asp2 from '../../Images/asp2.jpg'
const AboutFounder = () => {
    return (
        <>
            <section className="herosection">
                <div className="container ">
                    <div className="row py-5 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-10 pt-5 order-2 order-md-1 ">
                        
                            <h1>Founded by <strong className="text-primary">Mr.XYZ</strong>, a culinary enthusiast</h1>
                            <p className="my-4 pb-3 fs-4"> I am on a mission to make cooking an exciting journey for everyone, one delicious recipe at a time.</p>
                        </div>
                        <div className="col-8 col-md-6 text-center order-1 order-md-2 mt-md-3 p-lg-5 ">
                            <img src={asp2} alt="Food" className="img-fluid heroimg rounded img_animated" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutFounder;