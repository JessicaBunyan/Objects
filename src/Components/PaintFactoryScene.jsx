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
import { PaintFactoryAvatarContainer } from "./PaintFactoryAvatarContainer";
import { ColourDefinition } from "../Classes/ColourDefinition";

type Props = {

};

interface PaintFactoryState extends ObjectSceneState {

};


export class PaintFactoryScene extends ObjectScene{
    props: ObjectSceneProps;
    state: PaintFactoryState;
    defaultProps = {

    };
    constructor(props: ObjectSceneProps){
        super(props);
        // this.state= {

        // }
    }

    getSceneID(): string{
		return "PaintFactoryScene";
	}

	getClassName(): string{
		return super.getClassName() + " paint-factory ";
	}

	getAvatarContainer(){
        if(this)
        return <PaintFactoryAvatarContainer  />
	}
	
	getPillars(){
        
        let pillar = null;
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
                        parameters={["number", "number", "number"]}
                        bottom={100}
                        buttonName={"Create Colour"}
                        game={this.props.game}
						onComplete={() => this.pillarOnComplete(this.state.acceptParams[0]())}
						/>
        }
        return [pillar];
    }
    
    getAvatarContainer(): any{
        if (this.state.isInstantiated){
            return <PaintFactoryAvatarContainer  
            />
        } else {
            return null;
        }
    }
	
	pillarOnComplete(vals: IVariableDefinition[]){
		console.log("IN PILLAR ON COMPLETE");
        console.log(vals);
        
        const r = vals[0].value;
        const g = vals[1].value;
        const b = vals[2].value;

        if (!r || !g || !b){
            console.log("nope");
            return ;
        }

        const colour = new ColourDefinition(r, vals[1].value, vals[2].value)
        this.props.game.addItemToInventory("colour", colour);

		// this.setState({square: new Square(paramValues[0].value)})
	}

	onComplete(){
        console.log("in on complete");
        this.setState({isInstantiated: true});
		// this.state.acceptParams();
		// this.props.acceptParams();
	}



}






