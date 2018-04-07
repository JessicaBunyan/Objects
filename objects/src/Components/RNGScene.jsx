/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import {ObjectScene, ObjectSceneProps} from "./ObjectScene";
import {MethodPillar} from "./MethodPillar";
import {ConstructorPillar} from "./ConstructorPillar";
import {RNGSceneAvatarContainer} from "./RNGSceneAvatarContainer";

type Props = {

};

type State = {

};


export class RNGScene extends ObjectScene  {
    props: ObjectSceneProps;
    state: State;
    // static defaultProps = {

    // };
    constructor(props: ObjectSceneProps){
        super(props);
        this.state= {

        }
    }

    getSceneID():string{
        return "RNGScene";
    }

    getPillar(){
        let pillar;
        if (!this.state.complete){
            pillar = <ConstructorPillar bottom={100} 
                        onComplete={()  => this.setState({complete: true})} />
        } else {
            pillar = <MethodPillar 
                        parameters={[]}
                        bottom={100}
                        game={this.props.game}
                        onComplete={() => this.props.game.addItemToInventory("number", "" + Math.round(1 + (Math.random() * 9)))}
            />
        }
        return pillar;
    }

    getAvatarContainer(): any{
        if (this.state.complete){
            return <RNGSceneAvatarContainer  
            />
        } else {
            return null;
        }
    }



}





