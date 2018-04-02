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
				<div className="varDropSpot" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}> </div>
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

	allowDrop(ev) {
		console.log("in allow drop in method pill");
        ev.preventDefault();
	}
	
	drop(ev) {
		console.log("in drop in method pill");
		ev.preventDefault();
		console.log(ev);
        var data = ev.dataTransfer.getData("text");
		console.log(data);
		console.log(document.getElementById(data));
		console.log("+++");
        ev.target.appendChild(document.getElementById(data));
    }

}