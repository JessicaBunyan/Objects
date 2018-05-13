/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { TextBox } from "./TextBox";
import { AvatarContainer } from "./AvatarContainer";
import paintbrush1 from "../img/Paintbrush1.png";
import paintbrush2 from "../img/Paintbrush2.png";
import paintbrush3 from "../img/Paintbrush3.png";
import paintbrush4 from "../img/Paintbrush4.png";
import paintbrush5 from "../img/Paintbrush5.png";

type Props = {
    happiness: number
};

type State = {

};


export class PaintbrushAvatarContainer extends AvatarContainer{
    static defaultProps = {
        happiness: 0
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
        const imageSource = this.getImageSource();

        

        return (<img style={{height: "400px", top: "40px"}} src={imageSource} />);
    }

    getImageSource(){
        switch(this.props.happiness){
            case 0:
                return paintbrush1;
            case 1: 
            return paintbrush2
            case 2: 
            return paintbrush3
            case 3: 
            return paintbrush4
            case 4: 
            default:
            return paintbrush5

        }
    }



}






