import React from "react";


export class EditUser extends React.Component{

    editData(){
        fetch('http://localhost:1212/api/', {
            method: 'GET',
            //mode: 'no-cors',
           
            headers: {
                Accept: 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            //credentials: 'same-origin'
        });
    }   
    render(){
        return(
              
            <div className="container">
            <h1>Edit User </h1>
            <form>
                <div className="form-group">
            <input type="text" id="editUser" placeholder="Enter User id" required/>
            </div>
            <button className="btn btn-primary" onClick={this.editData}>Edit Details</button>
            </form></div> 
        );
    }
}