/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { VariableStore } from "../Classes/VariableStore";

export class NumberVar implements IVariableDefinition{

    val: number;
    type = "number";
    id: number;

    constructor(val: string, id?: number){

        this.val = Number.parseInt(val);

        VariableStore.registerVar(this);

    }

    getClassName(){
        return "inventory-item number"
    }

    getValue(){
        return this.val;
    }

    getType(){
        return "number";
    }

    getImage(){
        return this.val;   
    }

    onClick(){ return;}


}





