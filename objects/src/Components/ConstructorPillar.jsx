// @flow
import * as React from 'react';
import {ConstructorButton} from "./ConstructorButton"
import postbox from "../img/postbox.png";
import $ from 'jquery'; 

type Props = {
	onComplete: () => void,

};

type State = {
	enabled: boolean,
	clicked: boolean,
	text: string
};

export class ConstructorPillar extends React.Component<Props, State> {
	state: State;
	constructor(props: Props){
		super(props)
		// this.state;
		this.state = { 
			enabled: this.isEnabled(),
			clicked: false,
			text: ""
		}
	}
	isEnabled(){
		return true; 
	}

	render(){
		return (
  			<div className="pillar-region">
  			<div className={this.state.clicked ? "clearfix visible instantiating" : "clearfix visible"}> 
  				<img src={postbox}
  				className="pillar"
  		 		/>
				<ConstructorButton clicked={this.state.clicked} onClick={(e:JQueryEventObject) => this.buttonClicked(e)} enabled={this.state.enabled}/>
  			</div>
    		</div>
    	);
	}

	buttonClicked(e:JQueryEventObject){
		if (this.state.enabled === false){
			return;
		}

		const $button = $(e.currentTarget);
		this.setState({
			text: "",
			clicked: true
		});
		// this.props.onComplete();
		setTimeout(() => this.props.onComplete(), 3000);

	}
}