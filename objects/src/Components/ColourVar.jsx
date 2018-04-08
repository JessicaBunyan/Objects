/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "./Variable";

interface ColourProps extends VarProps {

};

type State = {

};


export class ColourVar extends Variable{
    props: ColourProps;
    state: State;
    defaultProps = {

    };
    constructor(props: ColourProps){
        super(props);
        this.state= {

        }
    }

    getClassName(){
        return super.getClassName() + " colour"
    }


}





