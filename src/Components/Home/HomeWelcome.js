import React from 'react';
import image from '../../Images/hsp.jpg'
import { NavLink } from 'react-router-dom';
const HomeWelcome = () => {
    return (
        <>
            <section className="herosection">
                <div className="container ">
                    <div className="row py-5 mt-5 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-10 pt-5 order-2 order-md-1 ">
                            <h1>Spice Up Your Meals with Our <strong className="text-primary">Indian</strong> Delights</h1>
                            <p className="my-4 pb-3 fs-4">Indulge in a flavorful journey through diverse Indian cuisines. Happy Cooking with us!</p>
                            <NavLink to="/recipies" className="loginbtn ">Explore!</NavLink>
                        </div>
                        <div className="col-8 col-md-6 text-center order-1 order-md-2 mt-md-3 p-lg-5 ">
                            <img src={image} alt="Food" className="img-fluid heroimg restopimg shadow-lg rounded img_animated" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeWelcome;