import React from "react";

export class Description extends React.Component{
    render(){
        return(
              <div className="container" align="center">
                  <h1>Using</h1>
                  <ul className="list-group">
                      <li className="list-group-item">Ecma Script 6</li>
                      <li className="list-group-item">JSX</li>
                      <li className="list-group-item">RestFul Api</li>
                      <li className="list-group-item">CRUD Operations</li>
                      <li className="list-group-item">MondoDB (local + ATLAS)</li>
                      </ul>
              </div>
        );
    }
}