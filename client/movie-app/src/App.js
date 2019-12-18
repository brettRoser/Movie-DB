import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Login from './Components/LoginComponent';
//import './App.css';

function App() {
  return (
    <div>
      {/* <Button variant="contained" color="primary">
        Hello World
      </Button> */}
      <h1>Movie DB!</h1>
      <Login/>
    </div>
  );
}

export default App;
