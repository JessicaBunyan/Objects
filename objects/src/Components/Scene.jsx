import React from 'react';
import {ConstructorPillar} from "./ConstructorPillar";
import {Square } from "../Classes/Square";
import {Scene1AvatarContainer} from "./Scene1AvatarContainer";

export class Scene extends React.Component{
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
			pillar = <ConstructorPillar bottom={100}
			onComplete={() => this.onComplete()}
			/>
		}


		return (
			<div className="scene s01">


					{pillar}
			    <Scene1AvatarContainer square={this.state.square} />

			      <div className="ground-footer">
						</div>
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