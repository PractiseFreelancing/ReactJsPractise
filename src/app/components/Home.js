import React from "react";
import PropTypes from "prop-types";


export class Home extends React.Component{
    render(){
        var content = "";
        if(true){
                content = "Hie!"
        }

        console.log("*****props*****",this.props);

        /* for practise
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
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

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