import React, { Component } from 'react';
import LoginPage from './layouts/login';
import './styles/global.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
