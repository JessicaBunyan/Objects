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
    happiness: number
};


export class PaintbrushScene extends ObjectScene{
    props: ObjectSceneProps;
    state: PaintbrushState;
    static defaultProps = {

    };
    constructor(props: ObjectSceneProps){
        super(props);
        this.setState({happiness: 0}); // TODO this is a bit of hackery we shouldn't do this I don't think
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
            onComplete={() => this.onInstantiation()}
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
                happiness={this.state.happiness}
            />
        } else {
            return null;
        }
    }

    addPillarOnComplete(paramValues: IVariableDefinition[]){

        const int1 = Number.parseInt(paramValues[0].value);
        const int2 = Number.parseInt(paramValues[1].value);


        let result = int1 + int2;


        if (result === 42){ // MR Paintbrush isn't so good at adding
            result = 43;
        }

        this.props.game.addItemToInventory(result.toString());

        let newHappiness;

        if (!this.state.happiness ||this.state.happiness === 0){
            newHappiness = 0;
        } else {
            newHappiness = this.state.happiness - 1;
        }

        this.setState({happiness: newHappiness});

    
    }

	
	paintPillarOnComplete(paramValues: IVariableDefinition[]){
		console.log("IN paint PILLAR ON COMPLETE");

        const newHappiness = this.state.happiness ? this.state.happiness + 1 : 1;

        this.setState({happiness: newHappiness});


	}

	onInstantiation(){
        console.log("in on complete");
        this.setState({isInstantiated: true});
        this.props.game.unlockScene(4);
	}



}





