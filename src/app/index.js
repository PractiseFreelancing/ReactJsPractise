import React from "react";
import { render } from "react-dom";


class FirstComponent extends React.Component{
	render() {
		return(
				<div className="container">
				<div className="row">
				<div className="col-xs-10 col-xs-offset-1">
				<h1>Hello World!!</h1>
				</div>
				</div>
				</div>
		);
	} 
}

render(<FirstComponent/>, window.document.getElementById("app"));