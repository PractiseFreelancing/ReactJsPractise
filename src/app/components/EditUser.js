import React from "react";


export class EditUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {editData: []};
      }
    editData(){
        alert("hello");
        var userInfo = document.getElementById("editUser").value;
        fetch('http://localhost:1212/api/'+userInfo, {
            method: 'GET',
            //mode: 'no-cors',
            
            headers: {
                Accept: 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //credentials: 'same-origin'
        })
      .then(data => data.json())
      .then((data) => { 
        console.log("all data",data);  
        this.setState({ editData: data }) });
        alert(this.state.editData)
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
            </form>
            <ul>
            {this.state.editData.map((data,i) => <li key={i}>{JSON.stringify(data)}</li>)}
                    </ul>
            </div> 
        );
    }
}