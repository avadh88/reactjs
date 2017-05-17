import React from "react";

class Footer extends React.Component{
	constructor(){
		super();
		this.state={name:"Avadh"};
	}
	render(){
		setTimeout(()=>{this.setState({name:"Avadh Patel"})},4000)
		setTimeout(()=>{this.setState({name:"Avadh"})},4000)
		return(
				<div>
				{this.state.name}
				<p className="App-intro">
          		To get started, edit <code>src/App.js</code> and save to reload.
        		</p>
        		</div>
		);
	}
}

export default Footer;