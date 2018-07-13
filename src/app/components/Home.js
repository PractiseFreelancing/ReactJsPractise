import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component{
    render(){
        var content = "";
        if(true){
                content = "Hie!"
        }

        console.log("*****props*****",this.props);
        return(
            <div>
                <p> In a New Component.  </p>
                <h1>{content}</h1>
                <p> Your name is {this.props.name} and your age is  {this.props.age}</p>
                <h2> User Object </h2><p> user name is : {this.props.user.name}</p>
                <div>
                    <h2> User Hobbies </h2>
                    <ul>
                            {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
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