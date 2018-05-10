// @flow
import React from 'react';
import {ConstructorPillar} from "./ConstructorPillar";
import {Square } from "../Classes/Square";
import {Scene} from "./Scene";
import {Scene1AvatarContainer} from "./Scene1AvatarContainer";
import {GroundFooter} from "./GroundFooter"
import { ObjectSceneProps } from './ObjectScene';


type State = {
	complete: boolean,
	square: Square | null
}

type Props = {

}


export class NullScene extends Scene {
	constructor(props: Props){
		super(props);
		this.state = {
			complete: false,
			square: null
		}
	}
	render(){
		let pillar;

		if (!this.state.isInstantiated){
			// pillar = <ConstructorPillar bottom={100}
			// onComplete={() => this.onComplete()}
			// />
		}
		return null;

		// return (
		// 	<div className="scene s00">


		// 	    <Scene1AvatarContainer square={this.state.square} />

		// 		 <GroundFooter  enabled={this.state.isInstantiated} />
		// 	  </div> 
		// 	);
	}
	onComplete(){
		console.log("in on complete");
		this.setState(
			{complete: true,
			 square: new Square(0)
		})
		
	}
}  