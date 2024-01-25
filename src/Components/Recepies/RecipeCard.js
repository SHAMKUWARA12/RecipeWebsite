import React from "react";
const RecipeCard = (props) => {
    return (
        <>
                    <div className="col-12 col-md-6 col-lg-3">

                        <div className="card p-4 text-center">
                            <img src={props.img} className="card-img-top img-fluid" alt="alt" />
                            <div className="card-body">
                                <h3>{props.heading}</h3>
                                <a className='btn btnhover' href={props.link} target="_blank" rel="noreferrer">Visit Now!</a>
                            </div>

                        </div>
                </div>
        </>
    )
}
export default RecipeCard;