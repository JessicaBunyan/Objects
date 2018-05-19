// @flow


import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { VariableType } from "../Interfaces/VariableTypes";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { TestDefinition } from "../Classes/TestDefinition";

export interface VarProps {
    var: IVariableDefinition
};



export class Variable extends React.Component<VarProps, any>{

    constructor(props: VarProps){
        super(props);
    }

    render() {
        console.log("in var render");
        console.log(this.props.var);
        const val = this.props.var;

        return (

            <div draggable="true" /*  */
                    onDragStart={(event) => val.drag(event, val.id, val.type, val.value)} 
                    onClick={(event) => val.onClick(event)}
                    className={val.getClassName()}
                    data-var-id={val.id}
                    data-var-type={val.type}
                    data-var-value={val.getValue()}
                    >
                {val.getImage()}
            </div>

        );
    }
    
}