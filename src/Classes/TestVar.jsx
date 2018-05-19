/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "../Components/Variable";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import test from "../img/Test.png";
import { VariableStore } from "../Classes/VariableStore";

export type questionDef = {
    question: string,
    answer: number
}



export class TestVar implements IVariableDefinition{

    questions: questionDef[];

    constructor(testDef: questionDef[]){
        this.questions = testDef;
        VariableStore.registerVar(this);

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
