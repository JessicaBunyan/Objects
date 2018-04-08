/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "./Variable";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";

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
        console.log("in colour var constr");
        console.log(props.value);
        console.log(props.value.toColourString());
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

    getDataTransferObj(){
        var dto: IVariableDefinition = {
            id: this.props.id,
            type: this.props.type,
            value: this.props.value
        };

        console.log("in get data transfer obj in colour var");
        console.log(JSON.stringify(dto));
        return JSON.stringify(dto);
    }

    render(){
        console.log("in render here is colour string");
        console.log(this.props);
        console.log(this.props.value);
        // console.log(this.props.value.toColourString());
        return(

            <div draggable="true" 
            onDragStart={(event) => this.drag(event, this.props.id, this.props.type, this.props.value)} 
            className={this.getClassName()}
            data-var-id={this.props.id}
            data-var-type={this.props.type}
            data-var-value={this.getValue()}
            // style={{borderBottomColor: "red"}}
            style={{borderBottomColor: this.props.value.toColourString()}}
            >
            </div>
        );

        }
        

    }

    





