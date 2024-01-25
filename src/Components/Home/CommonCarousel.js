import React from "react";
import CommanCard from "./CommonCard";
import y1 from '../../Images/Youtubers/y1.jpg'
import y2 from '../../Images/Youtubers/y2.jpg'
import y3 from '../../Images/Youtubers/y3.jpg'
import y4 from '../../Images/Youtubers/y4.jpg'
import y5 from '../../Images/Youtubers/y5.jpg'
import y6 from '../../Images/Youtubers/y6.jpg'
import y7 from '../../Images/Youtubers/y7.jpg'
import y8 from '../../Images/Youtubers/y8.jpg'
import y9 from '../../Images/Youtubers/y9.jpg'
const CommanCarousel = (props) => {
    return (
        <>
            <div className="carousel_Container">
            <div class="carousel-item active">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <CommanCard 
                            img={y1}
                            heading='Khana Khazana'
                        />
                        <CommanCard 
                            img={y3}
                            heading='Chef Ranveer Brar'
                        />
                        <CommanCard 
                            img={y2}
                            heading="Kabita's Kitchen"
                        />
                    </div>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <CommanCard 
                            img={y4}
                            heading='Nisha Madhulika'
                        />
                        <CommanCard 
                            img={y5}
                            heading='Your Food Lab'
                        />
                        <CommanCard 
                            img={y6}
                            heading='Chef Vikas Khanna'
                        />
                    </div>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <CommanCard 
                            img={y7}
                            heading="Cooking Shooking"
                        />
                        <CommanCard 
                            img={y9}
                            heading="Kanak's Kitchen"
                        />
                        <CommanCard 
                            img={y8}
                            heading="Hebbar's Kitchen"
                        />
                        
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default CommanCarousel;