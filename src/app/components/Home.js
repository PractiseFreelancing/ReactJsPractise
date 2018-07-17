import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import fetch from 'isomorphic-fetch';
import http from 'http';
import axios from 'axios';

export class Home extends React.Component{

    constructor(props){
        super();
        //this.age = props.age;
        this.state={
            age:props.age
        }
    }

    componentWillMount(){
        
    } 
     myFunc(){
        alert("hello");
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var pwd = document.getElementById("pwd").value;
    
        var data = {
            "first" : fname,
            "last" : lname,
            "mail" : email,
            "pass":pwd
        };
       
        fetch('http://localhost:1212/postData', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
        
        }).then(function(response) { 
            console.log("response.status:",JSON.stringify(response));     //=> number 100–599
            console.log("response.headers",response.headers);    //=> Headers
            //console.log("response.statusText:",response.statusText); //=> String
            //=> String
          
            return response.text()
          }, function(error) {
            error.message //=> String
          })
    }   
    /*myFunc(){
        this.setState(
            {
                age:this.state.age+5
            }

        );
        //this.age+=3;
        //console.log("*****this.age*****",this.age);
    }*/
    render(){
        var content = "";
        if(true){
                content = "Hie!"
        }
       
        console.log("*****props*****",this.props);
       
      
        //var postUrl = 'http://localhost:1212/postData';
        
        /*
        for practise
        <div>
                     User Hobbies :
                    <ul>
                            {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
                <p> Your name is {this.props.name} and your age is : {this.state.age} </p>
                */ 
        return(
            <div className="container">
            
                <h1> Form :   </h1>
                <form>
                <div className="form-group">
                        <label id="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" id="fname"  placeholder="Enter First Name" required/>
                        
                    </div>
                    <div className="form-group">
                        <label id="exampleInputPassword1">Last Name</label>
                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" required/>
                    </div>

                    <div className="form-group">
                        <label id="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email"  placeholder="Enter email" required/>
                        
                    </div>
                    <div className="form-group">
                        <label id="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter Password" required/>
                    </div>
                    
                    <button type="button" className="btn btn-primary" onClick={this.myFunc}>Submit</button>
                </form>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>

            </div>
        );
    }
}
// yet to study about proptypes (validation)
// we have to install package for this npm install prop-types 
//and import this pacckage and then define here
/*Home.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    user : PropTypes.object,
    children : PropTypes.element.isRequired
};
*/
//<button type="button" className="btn btn-primary" onClick={(event) => myFunc()}>Submit</button>