/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { TextBox } from "./TextBox";
import { AvatarContainer } from "./AvatarContainer";
import dad from "../img/dad.png";

type Props = {

};

type State = { 

};


export class DadAvatarContainer extends AvatarContainer{
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    getTextBox(){
        return <TextBox   text={["That bloody lad!", "I tells him, just add em up I tells him!", "He won't listen", "paintin? bah! madness"]}/>

    } 

    getImage(): any {
        return (<img style={{height: "400px", top: "40px"}} src={dad} />);
    }




}






