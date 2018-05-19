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

    val: number
    // };
    constructor(val: string){
        this.val = Number.parseInt(val);

    }

    getClassName(){
        return "inventory-item number"
    }

    getValue(){
        return this.val;
    }

    // getDataTransferObj(){
    //     var dto: IVariableDefinition = {
    //         id: this.props.id,
    //         type: this.props.type,
    //         value: this.props.value
    //     };
    //     return JSON.stringify(dto);
    // }

}





