import logo from "../assets/logow.png"
import fblogo from "../assets/fblogo.svg"
import lilogo from "../assets/lilogo.svg"
import {Link} from 'react-router-dom'
function Footer(){
    return(
        <div>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <div className="row">
                <div className="footer-bottom col-12 col-lg-10 offset-lg-1">
                <div className="footer-box col-10 row">
                    <div className="col-12 col-lg-8">
                        <div className="footer-box-heading">Get Started with WhatZapp Today</div>
                        <div className="footer-box-desc">With our powerful yet easy-to-use tools, it’s never been easier to grow your business on WhatsApp.</div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div>
                            <a href="/login">
                            <button className="footer-signup" >Sign Up its free</button>
                            </a>
                            </div>
                        <div>
                            <a href="mailto: helloworld@whatzapp.co">
                            <button className="footer-demo">Schedule a Demo</button>
                            </a>
                            </div>
                        
                    </div>
                </div>
                    <div className="footer-content row">
                        <div className="comp-info col-3">
                            <div >
                                <img className="footer-logo" src={logo}></img>
                            </div>
                            <div className="logo-sub">
                                &copy;
                                2021 WhatZapp
                            </div>
                            <div className="logo-sub2">
                                All Rights Reserved
                            </div>  
                        </div>
                        <div className="product col-3">
                            <div className="rowheading">Product</div>
                            <div className="rowpts">WhatZapp Poll coming soon</div>
                            <div className="rowpts">WhatZapp Link Generator</div>

                        </div>
                        <div className="resources col-3">
                            <div className="rowheading">Resources</div>
                            <div className="rowpts">User Guide</div>
                            <div className="rowpts"><Link to="/faqs">FAQs</Link></div>
                        </div>
                        <div className="implinks col-3">
                            <div className="rowheading">Important Links</div>
                            <div className="rowpts"><Link to="/privacy">Privacy Policy</Link></div>
                            <div className="rowpts"><Link to="/terms">Terms</Link></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="bot-foot row">
                <div className="madewith offset-2 col-2">Made with ❤️ in India</div>
                <div className="social-links offset-5 col-2">
                    <div className="link-item">
                        <img src={fblogo}></img>
                        <img src={lilogo} style={{marginLeft: "5px"}}></img>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer;