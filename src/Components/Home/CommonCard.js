import React from "react";
const CommanCard = (props) => {

    return (
        <>
                        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
                            <div className="card p-4 text-center">
                                <img src={props.img} className="card-img-top img-fluid" alt="alt" />
                                <div className="card-body">
                                    <h3>{props.heading}</h3>
                                    <p>{props.desc}</p>
                                    
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default CommanCard;