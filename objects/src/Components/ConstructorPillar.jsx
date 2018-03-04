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
		return (
  			<div className="constructor">
  			<div className="visible"> 
  				<img src={postbox}
  				className="pillar"
  				style={{bottom: this.props.bottom}} />
		    	<ConstructorButton pillarTop={280 + this.props.bottom} pillarWidth={200} enabled={this.state.enabled}/>
  			</div>
    		</div>
    	);
	}
}