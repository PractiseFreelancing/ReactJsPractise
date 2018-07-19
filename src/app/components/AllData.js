import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class AllData extends React.Component{
    
    constructor(props) {
        super();
        this.state = {allData: []};
      }
    componentDidMount(){
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
        
      });
    }  
    editDetail(allData){
        console.log(" edit detail",allData);
        var url = 'http://localhost:1212/api/'+allData+'';
        fetch(url, {
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
      .then((editData) => { 
          
       console.log("hello in edit detail",editData);
       document.getElementById(editData.fname).removeAttribute("readOnly");
       document.getElementById(editData.lname).removeAttribute("readOnly");
       document.getElementById(editData.email).removeAttribute("readOnly");
      });
        
       /* document.getElementById(allData.fname).removeAttribute("readOnly");
        document.getElementById(allData.lname).removeAttribute("readOnly");
        document.getElementById(allData.email).removeAttribute("readOnly");*/


    }
    updateDetail(){

    }
    renderProducts() {
       /* var edit ='';
        if(true){
        edit = <button to="/getAll" type="button" className="btn btn-primary" onClick={this.editDetail.bind(this,allData._id)}>Edit Details</button>;
        }else{
         edit = <button to="/getAll" type="button" className="btn btn-primary" onClick={this.updateDetail.bind(this,allData._id)}>Update Details</button>;
        }*/

        return this.state.allData.map((allData,i) => {
            return (
                <tr key={i} id={allData._id}>
                    <td>{allData._id}</td>
                    <td><input type="text" id={allData.fname} placeholder="Enter User id" value={allData.fname} readOnly /></td>
                    <td><input type="text" id={allData.lname} placeholder="Enter User id" value={allData.lname} readOnly/></td>
                    <td><input type="text" id={allData.email} placeholder="Enter User id" value={allData.email} readOnly/></td>
                    <td><button to="/getAll" type="button" className="btn btn-primary" onClick={this.editDetail.bind(this,allData._id)}>Edit Details</button></td>
                    <td><Link to="/getAll" type="button" className="btn btn-primary" onClick={this.deleteDetail.bind(this,allData._id)}>Delete Details</Link></td>
                </tr>
            );
        })
    }
    render(){
        return(
              
               <div className="container">
               <h1>All Data </h1>
               <ul>
            {this.state.allData.map((data,i) => <li key={i}>{JSON.stringify(data)}</li>)}
                    </ul>
                <br />
                <br />
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