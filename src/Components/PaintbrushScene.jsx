/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import {ObjectSceneProps, ObjectScene, ObjectSceneState} from "./ObjectScene";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import {PaintbrushAvatarContainer} from "./PaintbrushAvatarContainer";
import { ConstructorPillar } from "./ConstructorPillar";
import { MethodPillar } from "./MethodPillar";

type Props = {

};

interface PaintbrushState extends ObjectSceneState {

};


export class PaintbrushScene extends ObjectScene{
    props: ObjectSceneProps;
    state: PaintbrushState;
    defaultProps = {

    };
    constructor(props: ObjectSceneProps){
        super(props);
        // this.state= {

        // }
    }

    getSceneID(): string{
		return "PaintbrushScene";
	}

	getClassName(): string{
		return super.getClassName() + " paintbrush ";
	}

	getAvatarContainer(){
        if(this)
        return <PaintbrushAvatarContainer  />
	}
	
	getPillars(){
        
        let pillar;
        if (!this.state.isInstantiated){
            pillar = <ConstructorPillar
            game={this.props.game} 
            bottom={100}
            onComplete={() => this.onComplete()}
			/>
		} else {
            pillar = <MethodPillar
						getClearParamsFunction={(fn: () => void) => this.addClearParamsFunction(0, fn)} // TODO use real index not 1
						getAcceptParamsFuction={(fn: () => any[]) => this.addAcceptParamsFunction(0, fn)}
                        parameters={["colour"]}
                        bottom={100}
                        buttonName={"Paint"}
                        game={this.props.game}
						onComplete={() => this.pillarOnComplete(this.state.acceptParams[0]())}
						/>
        }
        return pillar;
    }
    
    getAvatarContainer(): any{
        if (this.state.isInstantiated){
            return <PaintbrushAvatarContainer  
            />
        } else {
            return null;
        }
    }
	
	pillarOnComplete(paramValues: IVariableDefinition[]){
		console.log("IN PILLAR ON COMPLETE");
		console.log(paramValues);


        // alert("we did it");
        console.log("WE DID IT");

		// this.setState({square: new Square(paramValues[0].value)})
	}

	onComplete(){
        console.log("in on complete");
        this.setState({isInstantiated: true});
		// this.state.acceptParams();
		// this.props.acceptParams();
	}



}





