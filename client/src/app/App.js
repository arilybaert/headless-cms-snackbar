import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Header,
  Main,
  Form,
  Login,
  Confirmation
 } from './components';


 import React from "react";
 import {
   BrowserRouter as Router,
   Route,
   Switch,

 } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <div className="container-fluid">
            <Header/>

            <Route path="/" exact>
              <Main/>
            </Route>

            <Route path="/login" exact>
              <Login/>
            </Route>

            <Route path="/form" exact>
              <Form/>
            </Route>

            <Route path="/Confirmation" exact>
              <Confirmation/>
            </Route>
            
            </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
