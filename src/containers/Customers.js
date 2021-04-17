import "./landing.css";
import author1 from "../assets/author1.png"
import author2 from "../assets/author2.png"

import author1img from "../assets/author1img.png"
import author2img from "../assets/author2img.png"


function Customers(){
    return(
        <center>
            <div className="customer-heading">
            Something To Say By Our Customers
            </div>
            
        <div className="feedback row">
            
            <div className="feedback-box col-12 col-lg-5 offset-lg-1 ">
                <div className="row" style={{marginTop:"61px"}}>
                <div className="col-12 col-sm-3">
                    <img src={author1img}></img>
                </div>
                <div className="col-12 col-sm-9" >
                    <div className="review" style={{width: "90%"}}>
                    We have been using Whatzapp for more than 1 year now. Right now, we have more than 200 agents. We cannot imagine using whatsapp without Whatzapp as a customer engagement tool”

                    </div>
                    <div className="author" style={{marginTop:"20px", fontSize:"24px", fontWeight:"500"}}>
                        José Antonio
                        {/* <img className="authorimg" src={author1}/> */}
                    </div>
                </div>
                </div>

            </div>
            <div className="feedback-box col-12 col-lg-5 offset-lg-1">
                <div className="row" style={{marginTop:"61px"}}>
                <div className="col-12 col-sm-3">
                    <img src={author2img}></img>
                </div>
                <div className="col-12 col-sm-9" >
                    <div className="review" style={{width: "90%"}}>
    
Amazing tool that makes your communication with customers much easier! Our overall experience with WhatZapp has been great. Customer support is amazing, super responsive. I love interacting with the team and are always looking to solve our problems in a unique way
”
                    </div>
                    <div className="author" style={{marginTop:"20px", fontSize:"24px", fontWeight:"500"}}>
                        Ana María
                        {/* <img className="authorimg" src={author2}/> */}
                    </div>
                </div>
                </div>

            </div>

        </div>
        </center>
    )
}

export default Customers;