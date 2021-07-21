import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { connect } from "react-redux";
import "./landing.css";
import { Link } from "react-router-dom";
import Pricing from "./Pricing";
function Home(props) {
  const [expiry, setExpiry] = useState(null);
  const [amountToPay, setAmountToPay] = useState(745);
  //this func fires on component load up
  //sends back the expiry date of the account
  var mobile_no;
  useEffect(() => {
    var numberInfo = window.location.pathname;
    mobile_no = numberInfo.substring(6, numberInfo.length);
    console.log(mobile_no);

    if (window.location.pathname == "/home") {
      mobile_no = localStorage.getItem("mobile").toString();
    } else {
      fbqEventCatcher("InitiateCheckout");
    }

    axios
      .get("https://eazybe.com/api/v1/whatzapp/getCreditHistory", {
        params: {
          mobile: mobile_no,
        },
      })
      .then(function (response) {
        // console.log(response.data.data[0].expiry_date.substr(0,10));
        setExpiry(response.data.data[0].expiry_date.substr(0, 10));
      })
      .catch((error) => {
        alert("Please reload this Page");
      });
  }, []);

  var user_mobile;

  if (window.location.pathname == "/home") {
    user_mobile = localStorage.getItem("mobile").toString();
  } else {
    user_mobile = window.location.pathname.substring(
      6,
      window.location.pathname.length
    );

    localStorage.setItem("mobile", user_mobile);
  }

  // let currdate = new Date();

  // let currYear = currdate.getFullYear();

  // let currMonth = currdate.getMonth() + 1;

  // let currDate = currdate.getDate();

  // var expiryYear = parseInt(expiry.substring(0, 4));
  // var expiryMonth = parseInt(expiry.substring(5, 7));
  // var expiryDate = parseInt(expiry.substring(8, 11));

  // const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // const firstDate = new Date(currYear, currMonth, currDate);
  // const secondDate = new Date(expiryYear, expiryMonth, expiryDate);

  // const diffDays = Math.round(
  //   Math.abs((firstDate - secondDate) / oneDay)
  // );

  return (
    <div>
      <div className="home-parent">
        <center>
          <div>
            <br />

            <div className="validity-heading">Expiry Date:</div>
            <div className="validity-value">{expiry ? expiry : null}</div>
          </div>
        </center>

        <Pricing />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    mobile: state.mobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogInHandler: (mobile) => dispatch({ type: "LOGIN", mobile: mobile }),
    LogOutHandler: () => dispatch({ type: "LOGOUT" }),
  };
};

function fbqEventCatcher(event) {
  var imgFb = document.getElementById("analytics");
  console.log(imgFb);
  if (imgFb) {
    imgFb.src = `https://www.facebook.com/tr?id=577091703261048&ev=${event}&noscript=1`;
  } else {
    var fbpixImg = document.createElement("noscript");
    imgFb = document.createElement("img");
    imgFb.setAttribute("id", "analytics");
    imgFb.height = 1;
    imgFb.width = 1;
    imgFb.style.display = "none";
    imgFb.src = `https://www.facebook.com/tr?id=577091703261048&ev=${event}&noscript=1`;
    fbpixImg.append(imgFb);

    document.getElementsByTagName("head")[0].append(fbpixImg);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
