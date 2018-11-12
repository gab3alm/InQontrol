import React, {Component} from 'react';
import InputPill from '../components/inputPill';
import FlatButton from '../components/flatButton';
import Divider from '../components/divider';
import ButtonPill from '../components/buttonPill';

class LoginPage extends Component{
  render(){
    return(
      <div id="login-page" className="row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="brand">InQontrol</p>
            </div>
            <div className="col-6 text-left">
              <FlatButton text="login"/>
            </div>
            <div className="col-6 text-right">
              <FlatButton text="register" disabled="true"/>
            </div>
            <div className="col-12">
              <form>
                <InputPill id="login-username" name="Username" type="text" icon="fa-user"/>
                <InputPill id="login-password" name="Password" type="password" icon="fa-unlock"/>
                <button type="submit" className="btn btn-login">Sign In</button>
              </form>
              <Divider text="or"/>
              <p className="text">you can login with your favorite social media</p>
              <div className="row text-center">
                <div className="col"><ButtonPill class="google-plus" icon="fa-google-plus-g"/></div>
                <div className="col"><ButtonPill class="facebook" icon="fa-facebook-f"/></div>
                <div className="col"><ButtonPill class="twitter" icon="fa-twitter"/></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;