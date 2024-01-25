import React from "react";
import CommanCard from "./CommonCard";
import b1 from '../../Images/Categories/b1.jpg'
import b2 from '../../Images/Categories/b2.jpg'
import b3 from '../../Images/Categories/b3.jpg'
import b4 from '../../Images/Categories/b4.jpg'
import b5 from '../../Images/Categories/b5.jpg'
import b6 from '../../Images/Categories/b6.jpg'
import b7 from '../../Images/Categories/b7.jpg'
import b8 from '../../Images/Categories/b8.jpg'

const HomeCategories = () => {
    return (
        <>
            <section className="homecategory my-5">
                <h1 className="text-center pt-5">Popular Categories</h1>
                <div className="container">
                    <div className="row pt-5">
                        <CommanCard
                            img={b1}
                            heading='Breakfast'
                        />
                        <CommanCard
                            img={b2}
                            heading='Lunch'
                        />
                        <CommanCard
                            img={b3}
                            heading='Drinks'
                        />
                        <CommanCard
                            img={b4}
                            heading='Deserts'
                        />
                    </div>
                    <div className="row pt-5">
                        <CommanCard
                            img={b5}
                            heading='Salads'
                        />
                        <CommanCard
                            img={b6}
                            heading='Snacks'
                        />
                        <CommanCard
                            img={b7}
                            heading='Soups'
                        />
                        <CommanCard
                            img={b8}
                            heading='Beverages'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeCategories;