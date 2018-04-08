/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "./Variable";

interface NumberProps extends VarProps {

};

type State = {

};


export class NumberVar extends Variable{
    props: NumberProps;
    state: State;
    defaultProps = {

    };
    constructor(props: NumberProps){
        super(props);
        this.state= {

        }
    }

    getClassName(){
        return super.getClassName() + " number"
    }


}





