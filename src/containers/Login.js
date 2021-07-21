import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./auth.css";
import logo from "../assets/logow.png";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();

  const [otpformflag, setotpformflag] = useState(false);

  //send mobile number to actie otp sending
  const postrequesthandler = async (body) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://eazybe.com/api/v1/whatzapp/auth",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    if (data && data.mobile) {
      localStorage.setItem("mobile", data.mobile);
      setotpformflag(true);
    }
  };

  //send otp to check if the submitte otp is correct
  const otppostrequesthandler = async (body) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://eazybe.com/api/v1/whatzapp/verify",
      requestOptions
    );
    const data = await response.json();
    if (data.status == true) {
      props.LogInHandler(localStorage.getItem("mobile"));
      history.push("/home");
    }
    console.log(data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    var body = {
      mobile: e.target[0].value,
    };

    postrequesthandler(body);
  };

  const onOtpSubmitHandler = (e) => {
    e.preventDefault();
    var body = {
      mobile: localStorage.getItem("mobile"),
      otp: e.target[0].value,
    };

    otppostrequesthandler(body);
  };
  return (
    <div>
      <div className="signup-modal col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <center>
          <img src={logo} className="auth-logo" />
        </center>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label" name="number">
              Phone Number
            </Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          {/* / <Form.Group controlId="formBasicPassword"> 
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>*/}
          <center>
            {otpformflag ? null : (
              <Button variant="primary" className="submit-button" type="submit">
                Submit
              </Button>
            )}
          </center>
        </Form>
        {otpformflag ? (
          <Form onSubmit={onOtpSubmitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label" name="otp">
                OTP
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <center>
              <Button variant="primary" className="submit-button" type="submit">
                Submit
              </Button>
            </center>
          </Form>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogInHandler: (mobile) => dispatch({ type: "LOGIN", mobile: mobile }),
    LogOutHandler: () => dispatch({ type: "LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
