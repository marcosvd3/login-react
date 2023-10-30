import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navigator from './components/navigator.js'
import Register from './components/register.js'
import Login from './components/login.js'


function App() {
  return (
    <Router>
      <Navigator/>
      <Routes>
      <Route path='/register' exact Component={Register}/>
      <Route path='/login'  exact Component={Login}/>
      </Routes>
    </Router>
  );
}

export default App;
