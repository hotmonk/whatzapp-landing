import "./landing.css";
import crmimg from "../assets/crm.png";
import { Link } from "react-router-dom";
function Powerful() {
  return (
    <div className="powerful-section">
      <div className="powerful-heading">Powerful Features</div>
      <div className="powerful-desc">to help you grow, right from WhatsApp</div>
      <div className="powerful-body row">
        <div className="powerful-img col-12 col-lg-6">
          <img className="pimg" src={crmimg} />
        </div>
        <div className="powerful-content col-12 col-lg-6">
          <div className="powerful-content-heading">Send Messages</div>
          <div className="powerful-features">
            <div className="feature">
              <div className="feature-desc">
                Send your customers whatsapp messages without saving their
                number. Upload an excel file and send custom offers to
                prospective clients.
              </div>
              <div className="feature-heading">
                <ul>
                  <li>Send Message without saving number</li>
                  <li>
                    Send Bulk Messages to your customers about upcoming Promos
                  </li>
                  <li>
                    Send Messages from a different Chrome Tab without switching
                    tabs
                  </li>
                </ul>
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
      </div>
    </div>
  );
}

export default Powerful;
