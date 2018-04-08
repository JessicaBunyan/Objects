/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "./Variable";
import { ColourDefinition } from "../Classes/ColourDefinition";

interface ColourProps extends VarProps {
    value: ColourDefinition
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

    getValue(){
        console.log("in colour var get value");
        return this.props.value.toString();
    }

    render(){
        console.log("in render here is colour string");
        console.log(this.props);
        console.log(this.props.value);
        console.log(this.props.value.toColourString());
        return(

            <div draggable="true" 
            onDragStart={(event) => this.drag(event, this.props.id, this.props.type, this.props.value)} 
            className={this.getClassName()}
            data-var-id={this.props.id}
            data-var-type={this.props.type}
            data-var-value={this.getValue()}
            style={{borderBottomColor: this.props.value.toColourString()}}
            >
            </div>
        );
        }
        
    }





