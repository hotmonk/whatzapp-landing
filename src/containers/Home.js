import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { connect } from "react-redux";
import "./landing.css";
import { Link } from "react-router-dom";
function Home(props) {
  const [expiry, setExpiry] = useState(null);
  const [amountToPay, setAmountToPay] = useState(745);
  //this func fires on component load up
  //sends back the expiry date of the account
  useEffect(() => {
    console.log(localStorage.getItem("mobile"));
    axios
      .get("https://whatzapp.co/api/v1/whatzapp/getCreditHistory", {
        params: {
          mobile: localStorage.getItem("mobile").toString(),
        },
      })
      .then(function (response) {
        // console.log(response.data.data[0].expiry_date.substr(0,10));
        setExpiry(response.data.data[0].expiry_date.substr(0, 10));
      });
  }, []);
  return (
    <div>
      <div className="home-parent">
        <center>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="validity-heading">Expiry Date:</div>
            <div className="validity-value">
              {expiry ? expiry.substr(0, 10) : null}
            </div>
          </div>
          <br />
          <div className="rechargeExpiry">
            <div>
              <Link to="/checkout">
                <button
                  className="e0_8"
                  onClick={() => localStorage.setItem("amountToPay", "745")}
                >
                  Recharge $9.99/30days
                </button>
              </Link>
            </div>
            <div>
              <Link to="/checkout">
                <button
                  className="e0_8"
                  onClick={() => localStorage.setItem("amountToPay", "7450")}
                >
                  Recharge $100/365days
                </button>
              </Link>
            </div>
          </div>
        </center>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
