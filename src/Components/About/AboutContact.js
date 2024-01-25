import React, { useState } from "react";
const AboutContact = () => {

    const [data,setData]=useState({
        myname:'',
        myphone:'',
        myemail:'',
        mymsg:''
    })

    const writeInput = (event) => {
        const{name,value}=event.target;
        setData((prevObj)=>{
            return {
                ...prevObj,
                [name]:value,
        }

        })
    }


    const onFormSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted!!')
        setData({
            myname:'',
            myphone:'',
            myemail:'',
            mymsg:''
        })
    }

    return (
        <>
            <section className="contactform">
                <h1 className="text-center my-5"> Contact Form</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto">
                            <form onSubmit={onFormSubmit}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input name="myname" value={data.myname} onChange={writeInput} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                    <input name="myphone" value={data.myphone} onChange={writeInput} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone number" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input name="myemail" value={data.myemail} onChange={writeInput} type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message Us</label>
                                    <textarea name="mymsg" value={data.mymsg} onChange={writeInput} class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btnhover" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutContact;