import React from 'react';
const HomeCard = (props) => {
    return (
        <>
            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
                <div class="card  p-3 ">
                    <img src={props.image} class="card-img-top img-fluid" alt="img1" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{props.head}</h5>
                    </div>

                </div>
            </div>
        </>
    )
}
export default HomeCard;