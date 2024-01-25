import React from "react";
import image from '../Images/asp.jpg'
import AboutMission from './About/AboutMission'
import AboutFounder from './About/AboutFounder'
import AboutContact from './About/AboutContact'
import { NavLink } from "react-router-dom";
const About = () => {
    return(
        <>
            <section className="herosection">
                <div className="container ">
                    <div className="row py-5 mt-5 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-10 pt-5 order-2 order-md-1 ">
                            <h1>Welcome to <strong className="text-primary">Foodie</strong>, where culinary passion meets cultural exploration.</h1>
                            <p className="my-4 pb-3 fs-4"> Discover a world of flavors and traditions with each recipe.</p>
                            <NavLink to='/about/contact' className="loginbtn" >Contact Us</NavLink>
                        </div>
                        <div className="col-8 col-md-6 text-center order-1 order-md-2 mt-md-3 p-lg-5 ">
                            <img src={image} alt="Food" className="img-fluid heroimg restopimg rounded img_animated" />
                        </div>
                    </div>
                </div>
            </section>
            <AboutMission />
            <AboutFounder />
            <AboutContact />
        </>
    )
}
export default About;