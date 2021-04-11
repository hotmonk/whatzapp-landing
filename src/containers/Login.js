
import {Form, Button} from 'react-bootstrap';
import './auth.css'
import logo from '../assets/logow.png'
function Login(){
    return(
        <div>
            <div className="signup-modal col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <center>
                <img src={logo} className="auth-logo"/>
                </center>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label">Phone Number</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
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
export default Login;