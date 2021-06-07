import Header from "./Header";
import Powerful from "./Powerful";
import Status from "./Status";
import Smart from "./Smart";
import usedby from "../assets/usedby.png";
import Poll from "./Poll";
import Customers from "./Customers";
import Plan from "./Plan";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./landing.css";

function LandingPage() {
  return (
    <div>
      <center>
        <Header />

        <br />
        <br />
        <br />
        <br />
        <hr></hr>
        <br />
        <br />
        <br />
        <br />

        <img src={usedby} alt="usedby" className="usedby" />
        <div>
          <a
            href="https://chrome.google.com/webstore/detail/whatzapp/clgficggccelgifppbcaepjdkklfcefd"
            target="_blank"
          >
            <button className="e0_8">Download Extension</button>
          </a>
        </div>

        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <Powerful />
        {/* <img src={Powerfulp} alt="Powerful" className="powerful" /> */}
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <Status />
        {/* <img src={Statusp} alt="Status" className="status" /> */}
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <Smart />
        {/* <img src={Smartp} alt="Smart" className="smart"/> */}
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <Poll />
        {/* <img src={Polls} alt="Polls" className="polls"/> */}
      </center>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <Plan />
      {/* <img src={Planb} alt="Plan" className="plan"/>  */}
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <center>
        <Customers />
        {/* <img src={Customersp} alt="Customers" className="customers" /> */}
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <Footer />
        {/* <img src={Footerb} alt="Footer" className="footer"/> */}
      </center>
    </div>
  );
}

export default LandingPage;
