import React from "react";
import CommanCard from "../Components/Home/CommonCard";
import Cdata from "./Cdata";
const Cuisines = () => {
    return (
        <>
            <div className="cuisines">
                <h1 className="text-center my-5">Indian Cuisines</h1>
                <div className="d-flex justify-content-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            {Cdata.map((value, index) => {
                                return <CommanCard
                                    key={index}
                                    img={value.img}
                                    heading={value.headname}
                                    desc={value.desc}
                                />
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Cuisines;