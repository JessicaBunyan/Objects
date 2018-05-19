/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "./Variable";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import test from "../img/Test.png";

export type questionDef = {
    question: string,
    answer: number
}



export class TestVar implements IVariableDefinition{

    questions: questionDef[];

    constructor(testDef: questionDef[]){
        this.questions = testDef;

    }

    toString(): string{
        return ``
    }

    getClassName(){
        return "inventory-item test"
    }

    getValue(){
        return "test";       

    }

    getImage(){
        return <img src={test} />
    }

    onClick(){ 
        console.log("woo");

    }

}
