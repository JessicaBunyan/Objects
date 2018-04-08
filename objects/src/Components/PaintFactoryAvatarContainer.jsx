/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { TextBox } from "./TextBox";
import { AvatarContainer } from "./AvatarContainer";
import paintFactory from "../img/PaintFactory.png";

type Props = {

};

type State = { 

};


export class PaintFactoryAvatarContainer extends AvatarContainer{
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    getTextBox(){
        return <TextBox   text={["COLOURS!", "Get your COLOURS here!", "COLOURS, hues", "Reds and blues"]}/>
    } 

    getImage(): any {
        return (<img style={{height: "400px", top: "40px"}} src={paintFactory} />);
    }




}






