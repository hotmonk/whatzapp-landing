import Statusimg from "../assets/Statusimg.png";
import { Link } from "react-router-dom";
function Status() {
  return (
    <div className="powerful-body row">
      <div className="powerful-content col-12 col-lg-5">
        <div className="powerful-content-heading">CRM</div>
        <div className="powerful-features">
          <div className="feature">
            <div className="powerful-features">
              <div className="feature">
                <div className="feature-desc">
                  Manage your customers in an efficient manner
                </div>
                <div className="feature-heading">
                  <ul>
                    <li>
                      Store User Profile such as Name, Email, Conversation
                      History
                    </li>
                    <li>
                      Use default Tags e.g. Lead, Client, Prospect or create
                      custom Tags
                    </li>
                    <li>
                      Store Interest Level of the customer as Low, Medium, High,
                      Very High
                    </li>
                    <li>
                      Keep a followup date to manage and ensure timely followups
                    </li>
                    <li>Manage your customers in an efficient manner</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://chrome.google.com/webstore/detail/whatzapp/clgficggccelgifppbcaepjdkklfcefd"
          target="_blank"
        >
          <button className="e0_8">Download Extension</button>
        </a>
      </div>

      <div className="powerful-img col-12 col-lg-7">
        <img className="pimg" src={Statusimg} />
      </div>
    </div>
  );
}

export default Status;
