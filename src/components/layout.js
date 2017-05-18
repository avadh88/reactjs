import React from "react";

class Layout extends React.Component {
	constructor()
	{
		super();
		this.name="will";
	}
	handleChange(e)
	{
		const title=e.target.value;
		this.props.changeTitle(title);
	}
	render(){
		//console.log(this.changeTitle.title);
		return(
			<div>
				<h1>It's {this.props.title}</h1>
				<input onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}

export default Layout;