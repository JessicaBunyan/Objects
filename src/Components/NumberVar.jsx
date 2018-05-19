/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "./Variable";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";

interface NumberProps extends VarProps {

};

type State = {

};


export class NumberVar implements IVariableDefinition{
    // props: NumberProps;
    // state: State;
    // defaultProps = {

    val: number;
    type = "number";
    id: number;

    // static build(dto: any){
    //     const n = new NumberVar(dto.val);

    //     n.id = dto.id;

    // }
    // };
    constructor(val: string, id?: number){

        this.val = Number.parseInt(val);
        if (id){
            this.id = id ;
        }

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

    getDataTransferObj(){

        const obj = {value: this.val}
        return obj;
        // return JSON.stringify(obj);
    }

}





