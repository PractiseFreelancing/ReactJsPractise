import React from "react";
import fetch from 'isomorphic-fetch';


export class AllData extends React.Component{
    
    constructor(props) {
        super();
        this.state = {allData: []};
      }
    componentDidMount(){
        fetch('http://localhost:1212/api/getData', {
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
        this.setState({ allData: data }) });
    }
    deleteDetail(){
        var id = document.getElementsByTagName("tr")[0];
        alert(JSON.stringify(id));
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
        alert("deleted "+id);
      });
    }
    renderProducts() {
        return this.state.allData.map((allData,i) => {
            return (
                <tr key={i} id={allData._id}>
                    <td>{allData._id}</td>
                    <td>{allData.fname}</td>
                    <td>{allData.lname}</td>
                    <td>{allData.email}</td>
                    <td><button to="/getAll" type="button" className="btn btn-primary" onClick={this.editDetail}>Edit Details</button></td>
                    <td><button to="/getAll" type="button" className="btn btn-primary" onClick={this.deleteDetail}>Delete Details</button></td>
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
                <div className="row">
                    <h1>Testing</h1>
                    
                </div>
               </div> 
        );
    }
}