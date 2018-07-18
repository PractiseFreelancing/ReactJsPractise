import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import { Description } from "./components/Description";
import { Home } from "./components/Home";
import { AllData } from "./components/AllData";
import { DeleteUser } from "./components/DeleteUser";
import { EditUser } from "./components/EditUser";


class FirstComponent extends React.Component{

	/*onGreet(){
		alert("Hello!");
	}*/
	render() {
		var user = {
			name : "Pulkit",
			hobbies : ["cricket", "mobile"]
		};
		/** <div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Header/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Home name={"Mayank"} age={22} user={user} greet={this.onGreet}>
								<p>This is a para in Home component</p>
							</Home>
						</div>
					</div>
				</div> */
		return(
			<Router>
			<div>
			  <ul>
				<li>
				  <Link to="/">Home</Link>
				</li>
				<li>
				  <Link to="/addUser">Add User</Link>
				</li>
				<li>
				  <Link to="/getAll">Get All Details</Link>
				</li>
				<li>
				  <Link to="/delUser">Delete User Detail</Link>
				</li>
				<li>
				  <Link to="/editUser">Edit Details</Link>
				</li>
			  </ul>
		
			  <hr />
		
			  <Route exact path="/" component={Description} />
			  <Route path="/addUser" component={Home} />
			  <Route path="/getAll" component={AllData} />
			  <Route path="/delUser" component={DeleteUser} />
			  <Route path="/editUser" component={EditUser} />
			</div>
		  </Router>
		);
	} 
}

render(<FirstComponent/>, window.document.getElementById("app"));