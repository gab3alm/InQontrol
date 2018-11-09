import React, {Component} from 'react';
import InputPill from '../components/inputPill';

class LoginPage extends Component{
  render(){
    return(
      <InputPill name="username" icon="user" type="text"/>
    )
  }
}

export default LoginPage;