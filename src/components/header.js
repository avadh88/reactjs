import React from "react";
import logo from '../logo.svg';
import Title from './title';

class Header extends React.Component{
	render(){
		const title="Welcome To React Js";
		return(
			<div className="App-header">
          		<img src={logo} className="App-logo" alt="logo" />
          		<Title title={title} />
          		<Title title="Avadh Patel"/>
        	</div>
		);
	}
}

export default Header;