import React from 'react';
import HomeCard from './HomeCard';
import i1 from '../../Images/Features/i1.jpg'
import i2 from '../../Images/Features/i2.jpg'
import i3 from '../../Images/Features/i3.jpg'
import i4 from '../../Images/Features/i4.jpg'
import i5 from '../../Images/Features/i5.jpg'
import i6 from '../../Images/Features/i6.jpg'
import i7 from '../../Images/Features/i7.jpg'
import i8 from '../../Images/Features/i8.jpg'
import i9 from '../../Images/Features/i9.jpg'
import i10 from '../../Images/Features/i10.jpg'
import i11 from '../../Images/Features/i11.jpg'
import i12 from '../../Images/Features/i12.jpg'

const HomeCarousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row p-5 text-center">

                                <HomeCard
                                    image={i1}
                                    head='Chicken Biryani'
                                />
                                <HomeCard
                                    image={i2}
                                    head='Butter Chicken'
                                />
                                <HomeCard
                                    image={i3}
                                    head='Panner Tikka'
                                />
                                <HomeCard
                                    image={i4}
                                    head='Masala Dosa'
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="container">
                            <div class="row p-5 text-center">

                                <HomeCard
                                    image={i5}
                                    head='Chole Bhature'
                                />
                                <HomeCard
                                    image={i6}
                                    head='Paani Puri (Golgappa)'
                                />
                                <HomeCard
                                    image={i7}
                                    head='Khaman Dhokla'
                                />
                                <HomeCard
                                    image={i8}
                                    head='Aalo Samosa'
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="container">
                            <div class="row p-5 text-center">

                                <HomeCard
                                    image={i9}
                                    head='Tandoori Chicken'
                                />
                                <HomeCard
                                    image={i10}
                                    head='Rajma Chawal'
                                />
                                <HomeCard
                                    image={i11}
                                    head='Pav and Bhaji'
                                />
                                <HomeCard
                                    image={i12}
                                    head='Idli with Sambar'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default HomeCarousel;