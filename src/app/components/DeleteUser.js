import React from "react";


export class DeleteUser extends React.Component{

    delData(){
        fetch('http://localhost:1212/api/getData', {
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
               <h1>Delete User </h1>
               <form>
                <div className="form-group">
               <input type="text" id="delUser" placeholder="Enter User id" required/>
               </div>
               <button className="btn btn-primary" onClick={this.delData}>Delete User</button>
               </form></div> 
        );
    }
}