import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class FirstComponent extends React.Component{
	render() {
		var user = {
			name : "Pulkit",
			hobbies : ["cricket", "mobile"]
		};
		return(
				<div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Header/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Home name={"Mayank"} age={22} user={user}>
								<p>This is a para in Home component</p>
							</Home>
						</div>
					</div>
				</div>
		);
	} 
}

render(<FirstComponent/>, window.document.getElementById("app"));