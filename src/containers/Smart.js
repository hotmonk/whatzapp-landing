import Smartimg from "../assets/Smartimg.png"
function Smart(){
    return (
        <div className="powerful-body row">
        <div className="powerful-img col-12 col-lg-7">
        <img className="smartimg" src={Smartimg}/>
        </div>
        <div className="powerful-content col-12 col-lg-5"  style={{marginTop:"100px"}}>
            <div className="powerful-content-heading">
                Smart Messaging
            </div>
            <div className="powerful-features">
                <div className="feature">
                <div className="powerful-features">
                    <div className="feature">
                    <div className="feature-desc">
                    Know Status of your messages and current Que length of the messages that are being processed.
                        </div>
                        <div className="feature-heading">
                            <ul>
                                <li>User Profile and Tags e.g. Lead, Client, Prospect, Hot, Cold</li>
                                <li>Quick Replies - Add quick replies to save yourself from typing the same text repeatedly</li>
                                <li>Search and Filter using Tags. Use WhatsApp as CRM</li>

                            </ul>
                        </div>
                        

                    </div>
                </div>
                </div>
            </div>
            <button className="learn-more">Learn More</button>
        </div>
    </div>
    )
}

export default Smart;