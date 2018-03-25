// @flow
import React from 'react';
import {ConstructorButton} from "./ConstructorButton"
import {MethodButton} from "./MethodButton"
import postbox from "../img/postbox.png";
import $ from 'jquery'; 


type Props ={ 
	onComplete: (n: number) => void
};
type State = {
	enabled: boolean,
	clicked: boolean,
	text?: ""
}; 

export class MethodPillar extends React.Component<Props, State> {

	constructor(props: Props){
		super(props);
		this.state= {
			enabled: this.isEnabled(),
			clicked: false
		}
    }
    
	isEnabled(){
		return true; 
	}

	render(){
		return (
  			<div className="pillar-region">
                <div className={this.state.clicked ? "clearfix visible" : "clearfix visible"}> 
                    <img src={postbox}
                    className="pillar"
                    />
                    <MethodButton style={`left: "75px"`} clicked={this.state.clicked} onClick={(e: JQueryEventObject) => this.buttonClicked(e)} enabled={this.state.enabled}/>
                </div>
    		</div>
    	);
	}

	buttonClicked(e: JQueryEventObject){
		if (this.state.enabled === false){
			return; 
		}

		const $button = $(e.currentTarget);
		// this.setState({
		// 	text: "",
		// 	clicked: true
		// });
        // this.props.onComplete();
        
		setTimeout(() => this.props.onComplete(1+ (Math.random() * 9)), 30);

	}
}