import React from 'react';
import {ConstructorPillar} from "./ConstructorPillar";
import {Square } from "../Classes/Square";
import {Scene, SceneProps} from "./Scene";
import {Scene1AvatarContainer} from "./Scene1AvatarContainer";
import {GroundFooter} from "./GroundFooter"
import { ObjectSceneProps } from './ObjectScene';


type State = {
	complete: boolean,
	square: Square,
	leaving: boolean,
	activating: boolean
}

export class Scene1 extends Scene<ObjectSceneProps, State> {
	constructor(props){
		super(props);
		this.state = {
			// complete: false,
			complete: true, // TODO switch back
			square: new Square()
		}
	}
	render(){
		let pillar;

		if (!this.state.complete){
			pillar = <ConstructorPillar bottom={100}
			onComplete={() => this.onComplete()}
			/>
		}
		let className= this.props.active ? "scene s01 active " : "scene s01 ";
		className += this.state.leaving ? "leaving " : ""
		className += this.state.activating ? "active " : ""
		return (
			<div onClick={this.props.active ? true : () => this.setState({activating: true})} className={className} >


					{pillar}
			    <Scene1AvatarContainer square={this.state.square} />

				<GroundFooter 
					onReturn={() => this.setState({leaving: true})} 
					enabled={this.state.complete} 
					flash={this.state.complete} 
					active ={this.props.active} />

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