import React, {useEffect} from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Login from './Login/Login'
import './App.css';
import {auth} from './firebase';
import Payment from './Payment'
import {useStateValue} from './StateProvider';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51IkATPKSPTnNRwCVtoVOYRKNsvJ4wYLXa04fqrIvuY5BBVycXdSm2VofNG5n36ffcFEAnaPo8xrNqeEgT3gfeqlY00sYlh2bL9")

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
//this will only run when the app loads
auth.onAuthStateChanged(authUser=>{
  console.log("the user is .........", authUser);
  if(authUser){
    //this means that the user is logged in 
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  }
  else{
    //the user is logged out
    dispatch({
      type: 'SET_USER',
      user: null
    })
  }
})
  },[])

  return (
    <Router>
      
    <div className="app">
     <Switch>
       <Route path="/checkout">
       <Header />
         <Route path="/login">
           <h1>log in</h1>
         </Route>
         <Checkout />
       </Route>
       <Route path="/login">
        <Login />
       </Route> 
       <Route path="/payment">
         <Header />
         <Elements stripe={promise}>
         <Payment />
         </Elements>
         
       </Route>
       <Route path="/">
         <Header />
         <Home />
       </Route>
     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
