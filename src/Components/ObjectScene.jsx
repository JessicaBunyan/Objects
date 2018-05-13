// @flow
import * as React from "react";
import {ConstructorPillar} from "./ConstructorPillar";
import {MethodPillar} from "./MethodPillar";
import {Square } from "../Classes/Square";
import {Scene, SceneProps} from "./Scene";
import {Scene1AvatarContainer} from "./Scene1AvatarContainer";
import {GroundFooter} from "./GroundFooter"
import { Game } from "./Game";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";

export class ObjectSceneProps {
    index: number;
    parentScene: Scene;
    game: Game;
    exitSceneCallback: () => void;
    complete: boolean;
    onClick: (sceneID: string) => void;
    activeScene: Scene;
}
export interface ObjectSceneState {
	isInstantiated: boolean;
    clearParamCallbacks: Array<() => void>;
    acceptParams: Array<() => IVariableDefinition[]>;
}


export class ObjectScene extends Scene{
    props: ObjectSceneProps;
    state: ObjectSceneState;

    static defaultProps = {
        complete: false,
        active: false,
    }

    constructor(props: ObjectSceneProps){
        super(props);
        var emptyFN = () => {};
        var initialParamCallbacks = [emptyFN]
        this.state = {
            isInstantiated: false,
            clearParamCallbacks: initialParamCallbacks,
            acceptParams: [() => []]
        }; 
    }

    getClassName(): string {
        console.log("in get classname default obj secne");
        const p1 =  this.isActive()? "scene active " : "scene  ";
        return p1 + " S0" + this.props.index;

    }

    isActive(): boolean{
        return this.props.activeScene === this.getSceneID();
    }

    getPillars(): any[]{
        
        console.error("calling getPillar on base class. Looks like you're missing implementation of this")
        return [];
    }

    addClearParamsFunction(index: number, fn: () => void){  
        console.log("in add clear params function");
        var current = this.state.clearParamCallbacks;
        console.log(current);
        console.log(current[index])
        console.log(fn);
        current[index] = fn;
        this.setState({clearParamCallbacks: current});
    }

    addAcceptParamsFunction(index: number, fn: () => any[]){
        var current = this.state.acceptParams;
        current[index] = fn;
        
        this.setState({acceptParams: current})
    }

    getSceneID(): string{
        console.error("using default getSceneID() in ObjectScene")
        return "ObjectScene"
    }

    getAvatarContainer(){
        console.error("calling getAvatarContainer on base class. Looks like you're missing implementation of this")
        return null;
    }

    getFooter(){
        return ( <GroundFooter 
					onReturn={() => this.onReturn()} 
					enabled={true} 
					flash={true} 
					active ={this.isActive()} />  	);
    }

    render(){
		let pillars = this.getPillars();
        let className= this.getClassName();
        let avContainer = this.getAvatarContainer();
        let footer = this.getFooter();
		
		return (
            <div  className={className} onClick={() => this.props.onClick(this.getSceneID())}>
                <div class="pillars-container clearfix">

                    {pillars[0]}
                    {pillars[1]}
                </div>
                {avContainer}
                {footer}
                    

            </div> 
                  
			);
    }
    
    onComplete(){
        console.error("Default onComplete used for object scene. ")
    }    

    onReturn(){
        console.log("IN ON RETURN");
        this.state.clearParamCallbacks.forEach((callbackFN) => {
            if (callbackFN){
                callbackFN();
            }
        });
        this.props.exitSceneCallback();
        // this.
        // this.props.onReturn();
    }





} 