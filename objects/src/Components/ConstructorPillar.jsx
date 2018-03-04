import React from 'react';
import {ConstructorButton} from "./ConstructorButton"
import postbox from "../img/postbox.png";

export class ConstructorPillar extends React.Component {
	constructor(props){
		super(props);
		this.state={
			enabled: this.isEnabled()
		}
	}
	isEnabled(){
		return true; 
	}

	render(){
		const btnHeight = 280 + this.props.bottom + "px";
		const style = {
			bottom: btnHeight,
			left: "75px"
		}
		return (
  			<div className="constructor">
  			<div className="visible"> 
  				<img src={postbox}
  				className="pillar"
  				style={{bottom: this.props.bottom}} />
		    	<ConstructorButton style={style} enabled={this.state.enabled}/>
  			</div>
    		</div>
    	);
	}

	buttonClicked(e){
		if (this.state.enabled === false){
			return;
		}

		const $button = $(e.currentTarget);
		this.setState({
			text: "",
			clicked: true
		});
		console.log("done");

	}
}