import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Header extends React.Component{
 
    render(){
       
        return(
              <div className="container" align="center">
                  <table>
                  <tbody>
                      <tr>
                    <td><Link to="/home" className="btn btn-primary">Home</Link></td>   
                    <td> <Link to="/description" className="btn btn-primary">Description</Link></td>  
                    <td><Link to="/addUser" className="btn btn-primary">Add User</Link></td>  
                    <td><Link to="/getAll" className="btn btn-primary">Get All Details</Link></td>  
                    <td><Link to="/delUser" className="btn btn-primary">Delete User Detail</Link></td>  
                    <td><Link to="/editUser" className="btn btn-primary">Edit Details</Link></td>     
                    </tr>
                    </tbody>
                    </table>
              </div>
        );
    }
}