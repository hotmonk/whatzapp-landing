import './App.css';
import LandingPage from './containers/landing';
import Navbar from './containers/customNavbar';
import Terms from "./containers/Terms"
import Privacy from "./containers/Privacy";
import Signup from "./containers/Signup";
import Faqs from "./containers/Faqs";
import Login from "./containers/Login"
import Home from "./containers/Home"
import Checkout from "./containers/Checkout"
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
/     <Navbar/>
      <Switch>
      <Route path="/terms" exact component={Terms}/>
      <Route path="/privacy" exact component={Privacy}/>
      <Route path="/faqs" exact component={Faqs}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/checkout" exact component={Checkout}/>
      <Route path="/" component={LandingPage}/>
      </Switch>
    </div>
  );
}

export default App;
