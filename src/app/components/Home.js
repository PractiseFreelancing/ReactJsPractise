import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends React.Component{
 
    render(){
       
        return(
              <div>
                 <h1>Home Page</h1>
              </div>
        );
    }
}