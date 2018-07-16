import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import fetch from 'isomorphic-fetch';

require("../functions/function");
export class Home extends React.Component{

    constructor(props){
        super();
        //this.age = props.age;
        this.state={
            age:props.age
        }
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
       
       /* function myFunc(){
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
        
        //    JQuery.post('http://localhost:2356/postData',data).
        $.ajax({
            type: "POST",
            url: 'http://localhost:1212/postData',
            data: data,
            success: "success",
            dataType: "JSON"
          });
          $.post( "http://localhost:1212/postData", data)
  .done(function( data ) {
    alert( "Data Loaded: " , data );
  });
        }/*
        for practise
        <p> Your name is {this.props.name} and your age is : {this.props.age} 
            User Object user name is : {this.props.user.name}</p>
                <div>
                     User Hobbies :
                    <ul>
                            {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}*/ 
        return(
            <div className="container">
            <p> Your name is {this.props.name} and your age is : {this.state.age} </p>
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
                    
                    <button type="submit" className="btn btn-primary" onClick={(event) => myFunc()}>Submit</button>
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
Home.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    user : PropTypes.object,
    children : PropTypes.element.isRequired
};