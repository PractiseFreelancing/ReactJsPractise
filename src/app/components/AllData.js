import React from "react";


export class AllData extends React.Component{
    
    constructor(props) {
        super(props);
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
    render(){
        return(
              
               <div className="container">
               <h1>All Data </h1>
               <ul>
            {this.state.allData.map((data,i) => <li key={i}>{JSON.stringify(data)}</li>)}
                    </ul>
               </div> 
        );
    }
}