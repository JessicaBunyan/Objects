import React from 'react';
import {ConstructorButton} from "./ConstructorButton"
import {MethodButton} from "./MethodButton"
import postbox from "../img/postbox.png";
import $ from 'jquery'; 


export class MethodPillar extends React.Component {

	constructor(props){
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
                    <MethodButton style={{left:"75px"}} onClick={(e) => this.buttonClicked(e)} enabled={this.state.enabled}/>
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
        // this.props.onComplete();
        
		setTimeout(() => this.props.onComplete(Math.random() * 10), 30);

	}
}