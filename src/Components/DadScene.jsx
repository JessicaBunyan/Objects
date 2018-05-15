/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { ObjectScene, ObjectSceneProps } from "./ObjectScene";
import { ConstructorPillar } from "./ConstructorPillar";
import { MethodPillar } from "./MethodPillar";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { DadAvatarContainer } from "./DadAvatarContainer";

// type Props = {

// };

type State = {

};


export class DadScene extends ObjectScene{
    props: ObjectSceneProps;
    state: State;
    defaultProps = {

    };
    constructor(props: ObjectSceneProps){
        super(props);
        
    }


    getSceneID(): string{
		return "DadScene";
	}

	getClassName(): string{
		return super.getClassName() + " dad ";
	}

	
	getPillars(){
        
        let pillar = null;
        // if (!this.state.isInstantiated){
            pillar = <ConstructorPillar
            game={this.props.game} 
            bottom={100}
            onComplete={() => this.onInstantiation()}
			/>
		// } else {
        //     pillar = <MethodPillar
		// 				getClearParamsFunction={(fn: () => void) => this.addClearParamsFunction(0, fn)} // TODO use real index not 1
		// 				getAcceptParamsFuction={(fn: () => any[]) => this.addAcceptParamsFunction(0, fn)}
        //                 parameters={["number", "number", "number"]}
        //                 bottom={100}
        //                 buttonName={"Create Colour"}
        //                 game={this.props.game}
		// 				onComplete={() => this.pillarOnComplete(this.state.acceptParams[0]())}
		// 				/>
        // }
        return [pillar];
    }
    
    getAvatarContainer(): any{
        if (this.state.isInstantiated){
            return <DadAvatarContainer
            />
        } else {
            return null;
        }
    }
	
	pillarOnComplete(vals: IVariableDefinition[]){
        
	}

	onInstantiation(){
        console.log("in on complete");
        this.setState({isInstantiated: true});
        this.props.game.dev_unlockAllScenes();
	}



}





