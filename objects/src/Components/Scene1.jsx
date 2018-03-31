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

	getSceneID(): string{
		return "Scene1";
	}

	getClassName(): string{
		return super.getClassName() + " Square ";
	}

	onComplete(){
		console.log("in on complete");
		this.setState(
			{complete: true,
			 square: new Square(0)
		})	
	}

} 