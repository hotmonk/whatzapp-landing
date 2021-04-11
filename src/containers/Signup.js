import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './auth.css'
import logo from '../assets/logow.png'
import axios from 'axios';
function Signup(){

    const postrequesthandler=async(body)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        const response = await fetch('https://whatzapp.co/api/v1/whatzapp/basicInfo', requestOptions);
        const data = await response.json();
        console.log(data)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        var future = new Date();
        future.setDate(future.getDate() + 30);
        // console.log(future.getDate(), future.getMonth(), future.getFullYear(), future.getHours(), future.getMinutes(), future.getSeconds())
        var stryear=future.getFullYear().toString();
        var strmonth;
        if((future.getMonth()+1)<=9)
        strmonth="0"+(future.getMonth()+1).toString();
        else
        strmonth=(future.getMonth()+1).toString();

        var strdate;
        if(future.getDate()<=9)
        strdate="0"+future.getDate().toString();
        else
        strdate=future.getDate().toString();


        var expirytime=stryear+'-'+strmonth+'-'+strdate+" 00:00:00";
        var body={
            mobile: e.target.number.value,
            name: e.target.name.value,
            expiry_date: expirytime
        }
        var jsonbody=JSON.stringify(body);
        console.log(jsonbody);
        // axios.post("https://whatzapp.co/api/v1/whatzapp/basicInfo", jsonbody)
        // .then(response => console.log(response));
        postrequesthandler(body);

    }
    return(
        <div>
            <div className="signup-modal col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <center>
                <img src={logo} className="auth-logo"/>
                </center>
                <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label">Organisation Name</Form.Label>
                    <Form.Control className="form-field" name="name" type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label">Phone Number</Form.Label>
                    <Form.Control type="number" name="number" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group> */}
                <center>
                    <Button variant="primary" className="submit-button" type="submit">
                        Submit
                    </Button>
                </center>

                </Form>
            </div>
        </div>
    )
}
export default Signup;