// @flow
import React from 'react';
import {ConstructorPillar} from "./ConstructorPillar";
import {MethodPillar} from "./MethodPillar";
import {Square } from "../Classes/Square";
import {Scene, SceneProps} from "./Scene";
import {Scene1AvatarContainer} from "./Scene1AvatarContainer";
import {GroundFooter} from "./GroundFooter"
import { ObjectSceneProps, ObjectScene } from './ObjectScene';


type State = {
	complete: boolean,
	square: Square | null,
}

// type Props = {
// 	parent: Scene<any, any>,
// 	active?: boolean,
// 	complete?: boolean
// }



export class Scene1 extends ObjectScene {
	props: ObjectSceneProps;
	state: State;
	constructor(props: ObjectSceneProps){
		super(props);
		this.state = {
			// complete: false,
			complete: false, // TODO switch back
			square: null 
		}
	}
	render(){
		let pillar;

		if (!this.state.complete){
			pillar = <ConstructorPillar bottom={100}
			onComplete={() => this.onComplete()}
			/>
		} else {
			pillar = <MethodPillar bottom={100}
						onComplete={(size) => this.setState({square: new Square(size)})}
						/>
		}
		let className= this.props.active ? "scene s01 active " : "scene s01 ";
		
		return (
			<div  className={className} >


					{pillar}
			    <Scene1AvatarContainer square={this.state.square} />

				<GroundFooter 
					onReturn={() => this.props.exitSceneCallback()} 
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