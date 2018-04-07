/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { TextBox } from "./TextBox";
import { AvatarContainer } from "./AvatarContainer";
import paintbrush from "../img/Paintbrush.png";

type Props = {

};

type State = {

};


export class PaintbrushAvatarContainer extends AvatarContainer{
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    getTextBox(){
        return <TextBox   text={["Hmmm..", "What to draw?.."]}/>
    } 

    getImage(): any {
        return (<img style={{height: "400px", top: "40px"}} src={paintbrush} />);
    }




}






