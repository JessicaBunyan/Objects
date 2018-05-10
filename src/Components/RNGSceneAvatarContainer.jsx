/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import {AvatarContainer} from "./AvatarContainer";
import {TextBox} from "./TextBox";
import rng from "../img/rng.png";
import questionman from "../img/questionman.png";

type Props = {

};

type State = {

};


export class RNGSceneAvatarContainer extends AvatarContainer{
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    getTextBox(){
        return <TextBox   text={["??? !?!£ ###' ??#'"," lorem ipsum"]}/>
    } 

    getImage(): any {
        return (<img style={{height: "400px", top: "40px"}} src={questionman} />);
    }




}



