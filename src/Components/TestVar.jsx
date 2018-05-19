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

interface TestProps extends VarProps {

};

type State = {

};


export class TestVar extends Variable{
    props: TestProps;
    state: State;
    defaultProps = {

    };
    constructor(props: TestProps){
        super(props);
        this.state= {

        }
    }

    getClassName(){
        return super.getClassName() + " test"
    }

    // getValue(){
    //     return this.props.value.toString();
    // }

    // getDataTransferObj(){
    //     var dto: IVariableDefinition = {
    //         id: this.props.id,
    //         type: this.props.type,
    //         value: this.props.value
    //     };

    //     return JSON.stringify(dto);
    // }

    onClick(){
        console.log("woo"); 
    }

    render(){
        return(

            <div draggable="true" 
            onClick={() => this.onClick()}
            className={this.getClassName()}
            data-var-id={this.props.id}
            data-var-type={this.props.type}
            // style={{borderBottomColor: "red"}}
            // style={{borderBottomColor: this.props.value.toColourString()}}
            >
            <img src={test} />
            </div>
        );

        }
        

    }

    





