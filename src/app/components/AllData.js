import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class AllData extends React.Component{
    
    constructor(props) {
        super();
        this.state = {
            allData: [],
            editUpdateButton : "Edit Details",
            deleteButton : "Delete Details",
            flag : true
        };
      }
    componentWillMount(){
        this.fetchData();
    }

    fetchData(){
        fetch('http://localhost:1212/api/getData', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //credentials: 'same-origin'
        })
      .then(data => data.json())
      .then((data) => { 
        console.log("all data",data);  
        this.setState({ allData: data }) });
    }
    deleteDetail(id){
        //var id = document.getElementsByTagName("tr")[0];
        if(this.state.flag == true){
            this.setState({ flag: false });
        }else{
            this.setState({ flag: true });
        }
        
        
        console.log("tablle data",id);
        var url = 'http://localhost:1212/api/'+id+'';
        fetch(url, {
            method: 'DELETE',
            //mode: 'no-cors',
            
            headers: {
                Accept: 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //credentials: 'same-origin'
        })
      .then(data => data.json())
      .then((editData) => { 
        //const userdata = (data).map((data,i) => <li key={i}>{data}</li>);
        //console.log("all data",editData);  
        console.log("deleted");
        this.fetchData();
      });
      
    }  
    editUpdateDetail(allData,id){
        if(document.getElementById(id).textContent === "Edit Details"){
           document.getElementById(id).textContent = "Update Details";
           this.state.editUpdateButton = "Update Details";
           console.log("button ", this.state.editUpdateButton);
            console.log(" edit detail",allData._id);
        var url = 'http://localhost:1212/api/'+allData._id+'';
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            }
           })
      .then(data => data.json())
      .then((editData) => { 
       console.log("hello in edit detail",editData);
       document.getElementById(editData.fname).readOnly = false;
       document.getElementById(editData.lname).readOnly = false;
       document.getElementById(editData.email).readOnly = false;
        });
        }else{
            console.log("in else of button",this.state.editUpdateButton);
           
            var fname = document.getElementById(allData.fname).value;
            var lname = document.getElementById(allData.lname).value;
            var email = document.getElementById(allData.email).value;
            //updateQuery
            var data = {
                "first" : fname,
                "last" : lname,
                "mail" : email
            };
            var url = 'http://localhost:1212/api/'+allData._id+'';
            fetch(url, {
                method: 'PUT',
                 body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    //'Content-Type': 'application/json'
                    'Content-Type': 'application/x-www-form-urlencoded'
                }  
            });
            document.getElementById(id).textContent = "Edit Details";
            this.state.editUpdateButton = "Edit Details";
            alert("DETAILS UPDATED SUCCESSFULLY");
                document.getElementById(allData.fname).readOnly = true;
            document.getElementById(allData.lname).readOnly = true;
            document.getElementById(allData.email).readOnly = true;


        }
    }
 
    renderProducts() {
        return this.state.allData.map((allData,i) => {
            return (
                <tr key={i} id={allData._id}>
                    <td>{allData._id}</td>
                    <td><input type="text" id={allData.fname}  defaultValue={allData.fname}  readOnly={true}/></td>
                    <td><input type="text" id={allData.lname}  defaultValue={allData.lname} readOnly={true}/></td>
                    <td><input type="text" id={allData.email}  defaultValue={allData.email} readOnly={true}/></td>
                    <td><button to="/getAll" id={i} type="button" className="btn btn-primary" onClick={this.editUpdateDetail.bind(this,allData,i)}>{this.state.editUpdateButton}</button></td>
                    <td><Link to="/getAll" type="button" className="btn btn-primary" onClick={this.deleteDetail.bind(this,allData._id)}>{this.state.deleteButton}</Link></td>
                </tr>
            );
        })
    }
    /**
     * Details of all data in json
     *  <ul>
            {this.state.allData.map((data,i) => <li key={i}>{JSON.stringify(data)}</li>)}
                    </ul>
     */
    render(){
        return(
              
               <div className="container">
               <h1 align= "center">All Data </h1>
              <br />
                <br />
                <table className="table">
                    <thead>
                        <tr key={this.state.allData._id}>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderProducts()}
                    </tbody>
                </table>
               
               </div> 
        );
    }
}