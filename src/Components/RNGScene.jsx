/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import {ObjectScene, ObjectSceneProps, ObjectSceneState} from "./ObjectScene";
import {MethodPillar} from "./MethodPillar";
import {ConstructorPillar} from "./ConstructorPillar";
import {RNGSceneAvatarContainer} from "./RNGSceneAvatarContainer";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { NumberVar } from "./NumberVar";


interface RNGState extends ObjectSceneState {

}



export class RNGScene extends ObjectScene  {
    props: ObjectSceneProps;
    state: RNGState;
    // static defaultProps = {

    // };
    constructor(props: ObjectSceneProps){
        super(props);
        // this.state= {

        // }
    }

    getSceneID():string{
        return "RNGScene";
    }

    getPillars(): any[]{
        let pillar;
        if (!this.state.isInstantiated){
            pillar = <ConstructorPillar bottom={100} 
                        onComplete={()  => this.setState({isInstantiated: true})} />
        } else {
            pillar = <MethodPillar 
                        parameters={[]}
                        bottom={100}
                        buttonName={"Get Number"}
                        game={this.props.game}
                        onComplete={() => this.props.game.addItemToInventory(new NumberVar("" + Math.round(1 + (Math.random() * 9))))}
            />
        }
        return [pillar];
    }

    getAvatarContainer(): any{
        if (this.state.isInstantiated){
            return <RNGSceneAvatarContainer  
            />
        } else {
            return null;
        }
    }



}





