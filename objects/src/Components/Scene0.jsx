import React from 'react';
import {ConstructorPillar} from "./ConstructorPillar";
import {Square } from "../Classes/Square";
import {Scene} from "./Scene";
import {Scene1AvatarContainer} from "./Scene1AvatarContainer";
import {GroundFooter} from "./GroundFooter"


type State = {
	complete: boolean,
	square: Square
}

export class Scene0 extends Scene<Props, State> {
	constructor(props){
		super(props);
		this.state = {
			complete: false,
			square: null
		}
	}
	render(){
		let pillar;

		if (!this.state.complete){
			// pillar = <ConstructorPillar bottom={100}
			// onComplete={() => this.onComplete()}
			// />
		}


		return (
			<div className="scene s00">


			    <Scene1AvatarContainer square={this.state.square} />

				<GroundFooter return={this.props.parent} enabled={this.state.complete} />
			  </div> 
			);
	}
	onComplete(){
		console.log("in on complete");
		this.setState(
			{complete: true,
			 square: new Square(0)
		})
		
	}
} 