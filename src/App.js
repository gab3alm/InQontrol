import React, { Component } from 'react';
import LoginPage from './layouts/login';
import './sass/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <LoginPage />
        </div>
      </div>
    );
  }
}

export default App;
