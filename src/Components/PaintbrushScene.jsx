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
	
	getPillars(): any[]{
        
        let pillars = [];
        if (!this.state.isInstantiated){
            pillars.push(<ConstructorPillar
            game={this.props.game} 
            bottom={100}
            onComplete={() => this.onComplete()}
			/>);
		} else {
            pillars.push(<MethodPillar
						getClearParamsFunction={(fn: () => void) => this.addClearParamsFunction(0, fn)} // TODO use real index not just 0
						getAcceptParamsFuction={(fn: () => any[]) => this.addAcceptParamsFunction(0, fn)}
                        parameters={["number", "number"]}
                        bottom={100}
                        buttonName={"Add Up"}
                        game={this.props.game}
						onComplete={() => this.addPillarOnComplete(this.state.acceptParams[0]())}
                        />);
        
            pillars.push(<MethodPillar
                getClearParamsFunction={(fn: () => void) => this.addClearParamsFunction(1, fn)} // TODO use real index not 1
                getAcceptParamsFuction={(fn: () => any[]) => this.addAcceptParamsFunction(1, fn)}
                parameters={["colour"]}
                bottom={100}
                buttonName={"Paint"}
                game={this.props.game}
                onComplete={() => this.paintPillarOnComplete(this.state.acceptParams[1]())}
                />);
        }
        return pillars;
    }
    
    getAvatarContainer(): any{
        if (this.state.isInstantiated){
            return <PaintbrushAvatarContainer  
            />
        } else {
            return null;
        }
    }

    addPillarOnComplete(paramValues: IVariableDefinition[]){
        console.error("adding finished");

        console.log(paramValues);

        const int1 = Number.parseInt(paramValues[0].value);
        const int2 = Number.parseInt(paramValues[1].value);


        let result = int1 + int2;


        if (result === 42){ // MR Paintbrush isn't so good at adding
            result = 43;
        }

        this.props.game.addItemToInventory("number", result.toString());

    
    }

	
	paintPillarOnComplete(paramValues: IVariableDefinition[]){
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





