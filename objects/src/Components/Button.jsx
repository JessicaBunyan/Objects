import React from 'react';

export class Button extends React.Component{
	baseClassName = "button";
	constructor(props){
		super(props);
		this.state = {
			clicked: false,
			text: "New",
			enabled: props.enabled
		};
	}

	getButtonClassName(){
		const clicked = this.state.clicked ? " clicked" : "";
		const enabled = this.state.enabled ? "" : " disabled";
		return this.baseClassName + clicked + enabled;
	}

	getStyle() {
		const bottomVal = this.props.pillarTop - (this.state.clicked ? 10 : 0);
		return {
			bottom: bottomVal,
			left: this.props.pillarWidth / 2 -25
		};
	}

	render(){
		console.log(this.props);
		console.log(this.getStyle());
		return (
		<div className={this.getButtonClassName()} 
			style={this.getStyle()}
			onClick={(e) => this.buttonClicked(e)}
			>
			{this.state.text}
		</div>
		)
	}
}