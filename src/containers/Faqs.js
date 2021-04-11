import {Link} from 'react-router-dom'
function Faqs(){
    return(
<div className="terms-parent col-12 col-md-8 offset-md-2" >
            <div className="terms-body">
                <div className="terms-heading"> FAQs </div>
                <div className="para">
                    <ul>
                        <li><b>What is WhatZapp?</b></li>
                    </ul>
                    WhatZapp is a chrome extension that is supposed to make running your business simpler using whatsapp
                </div>
                <div className="para">
                    <ul>
                        <li><b>How does WhatZapp help my business?</b></li>
                    </ul>
                    Using incredible tools such as Send Messages, Quick Replies Polls, Smart Chat if makes web whatsapp super powerful and a life saver for business owners
                </div>
                <div className="para">
                    <ul>
                        <li><b>Are you verified by whatsapp?</b></li>
                    </ul>
                    We have no link with the official Whatsapp service
                </div>
                <div className="para">
                    <ul>
                        <li><b>Will you be able to send messages from my number?</b></li>
                    </ul>
                    No. We give you the extension to make your message sending journey easy
                </div>
                <div className="para">
                    <ul>
                        <li><b>Will this work with any operating system?</b></li>
                    </ul>
                    Yes. This a chrome extension so it will work with any operating system
                </div>
                <div className="para">
                    <ul>
                        <li><b>What languages are available?</b></li>
                    </ul>
                    Only English for now, but you can send whatsapp messages in any language you like
                </div>             
                <div className="para">
                    <ul>
                        <li><b>I have a technical problem, who do I email?</b></li>
                    </ul>
                    <a href="mailto:admin@whatZapp.co">admin@whatZapp.co</a>
                </div>
                <div className="para">
                    <ul>
                        <li><b>How do I pay for the paid plans?</b></li>
                    </ul>
                    Go to the website, choose that plan that suits you the best and pay using the stripe payment gateway
                </div>      
            </div>
        </div>
    )
}

export default Faqs;