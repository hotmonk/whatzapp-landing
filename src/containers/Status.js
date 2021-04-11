import Statusimg from "../assets/Statusimg.png"
function Status(){
    return(
        <div className="powerful-body row">
                    <div className="powerful-content col-12 col-lg-5">
            <div className="powerful-content-heading">
                Status
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
                                <li>Add custom delay to prevent whatsapp ban</li>
                                <li>See pending messages under processing</li>
                                <li>Listen to incoming messages and devise smart replies</li>

                            </ul>
                        </div>
                        

                    </div>
                </div>
                </div>
            </div>
            <button className="learn-more">Learn More</button>
        </div>
        
        <div className="powerful-img col-12 col-lg-7">
        <img className="pimg" src={Statusimg}/>
        </div>

    </div>
    )
}

export default Status;