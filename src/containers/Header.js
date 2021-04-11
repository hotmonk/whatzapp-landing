import headerimg from "../assets/headerimg.png"
import {Link} from "react-router-dom";
import "./landing.css"
function Header(){
    return(
        <>
        <div className="headerbg row">
            <div className="text-contentparent col-12 col-lg-6">
                <div className="text-content">
                {/* <div className="everything">
                    Everything You Need
                </div> */}
                <div className="headerheading">
                Manage your business
                    on <u style={{textDecorationLine:"underline", textDecorationColor:"red"}}>WhatsApp</u>
                </div>
                <div className="header-desc">
                Communicating with your audience on WhatsApp has never been easier! WhatZapp Chrome extension contains all the tools you need  to communicate with your customers efficiently and utilize the full power of WhatsApp. Offering tools such as Sending messages, reminders, Quick Replies, Polls, CRM etc that make your everyday business not only simple to run but also far more efficient in driving sales.                 </div>
                 <Link to="/signup"><button className="e0_8">Signup, It's Free</button></Link> 
                </div>

            </div>
            <div className="picture-content col-12 col-md-6">
                <img className="headerimg" src={headerimg}/>
            </div>
        </div>
       
        </>
    )
}

export default Header;