import React from 'react';

export class Button extends React.Component{
	baseClassName = "button";
	constructor(props){
		super(props);
		this.state = {
			text: "New",
		};
	}

	getButtonClassName(){
		const clicked = this.props.clicked ? " clicked" : "";
		const enabled = this.props.enabled ? "" : " disabled";
		return this.baseClassName + clicked + enabled;
	}

	render(){
		console.log(this.props);
		return (
			<div className="button-holder" style={this.props.style}>
		<div className={this.getButtonClassName()} 
			onClick={(e) => this.props.onClick(e)}
			>
			<span>
			{this.state.text}
			</span>
		</div>
			</div>
		)
	}
}