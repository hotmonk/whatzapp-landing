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
                    We are fastest growing business school and and we have been using Whatsapp for more than 1 year now. Right now, we have more than 100 agents. Without Whatsapp, it will be impossible to use WhatsApp as a marketing tool. As soon as you start to use Whatsapp, it will become very helpful for you.”

                    </div>
                    <div className="author" style={{marginTop:"20px"}}>
                        <img className="authorimg" src={author1}/>
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
                    Amazing tool that makes your communication with customers much easier! Our overall experience with Whatsapp has been great. Customer support is amazing, super responsive and open to suggestions. The product itself perfectly fits our needs, and if it lacks anything... they are developing it already, which is a great and nice surprise. I would give 6 out 5 stars to this App, totally their brand advocate, keep it up!”
                    </div>
                    <div className="author" style={{marginTop:"20px"}}>
                        <img className="authorimg" src={author2}/>
                    </div>
                </div>
                </div>

            </div>

        </div>
        </center>
    )
}

export default Customers;