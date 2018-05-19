/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { ObjectScene, ObjectSceneProps, ObjectSceneState } from "./ObjectScene";
import { ConstructorPillar } from "./ConstructorPillar";
import { MethodPillar } from "./MethodPillar";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { DadAvatarContainer } from "./DadAvatarContainer";
import { TestVar } from "../Classes/TestVar";
import { NumberVar } from "../Classes/NumberVar";

// type Props = {

// };




export class DadScene extends ObjectScene{
    props: ObjectSceneProps;
    state: ObjectSceneState;
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
        
        let pillars = [];
        if (!this.state.isInstantiated){
            const p1 = <ConstructorPillar
            game={this.props.game} 
            bottom={100}
            onComplete={() => this.onInstantiation()}
            />
            pillars.push(p1);
		} else {
            const p1 = <MethodPillar
						// getClearParamsFunction={(fn: () => void) => this.addClearParamsFunction(0, fn)} // TODO use real index not 1
						// getAcceptParamsFuction={(fn: () => any[]) => this.addAcceptParamsFunction(0, fn)}
                        parameters={[]}
                        bottom={100}
                        buttonName={"Get Test"}
                        game={this.props.game}
						onComplete={() => this.getTestPillarOnComplete()}
                        />

            const p2 = <MethodPillar
                        getClearParamsFunction={(fn: () => void) => this.addClearParamsFunction(0, fn)} // TODO use real index not 1
						getAcceptParamsFuction={(fn: () => any[]) => this.addAcceptParamsFunction(0, fn)}
                        parameters={["test"]}
                        bottom={100}
                        buttonName={"Check Answers"}
                        game={this.props.game}
                        onComplete={() => this.checkTestPillarOnComplete(this.state.acceptParams[0]())}
                        />
            
            pillars.push(p1);
            pillars.push(p2);


        }
        return pillars;
    }
    
    getAvatarContainer(): any{
        if (this.state.isInstantiated){
            return <DadAvatarContainer
            />
        } else {
            return null;
        }
    }
	
	getTestPillarOnComplete(){
        console.error("not implemented yet");
        this.props.game.addItemToInventory(new TestVar([]));

    }
    
    checkTestPillarOnComplete(params: IVariableDefinition[]){
        const test: TestVar = params[0];
        console.log(test);

        if (test.areAnswersCorrect()){
            console.log("That's right!");
        } else {
            console.error(" WRONG!!!! AHAHHAHAHA");
        }

    }

	onInstantiation(){
        console.log("in on complete");
        this.setState({isInstantiated: true});
        this.props.game.dev_unlockAllScenes();
	}



}

 



