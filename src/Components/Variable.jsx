// @flow


import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { VariableType } from "../Interfaces/VariableTypes";
import { ColourDefinition } from "../Classes/ColourDefinition";

export interface VarProps {
    id: number,
    type: VariableType,
    value: string | ColourDefinition
};



export class Variable extends React.Component<VarProps, any>{

    constructor(props: VarProps){
        super(props);

    }



    getClassName(){
        return "inventory-item " // TODO-TB include types here?
    }

    getValue(){
        console.log("in bas getvalue");
        return this.props.value;
    }

    render() {
        return (

            <div draggable="true" 
                    onDragStart={(event) => this.drag(event, this.props.id, this.props.type, this.props.value)} 
                    className={this.getClassName()}
                    data-var-id={this.props.id}
                    data-var-type={this.props.type}
                    data-var-value={this.getValue()}
                    >
                {this.getValue()}
            </div>

        );
    }

    // getDataTransferObj(){
    //     console.error("Default get data transfer obj used! won't transfer shit");
    //     return JSON.stringify(null);
    // }

    getDataTransferObj(){
        var dto: IVariableDefinition = {
            id: this.props.id,
            type: this.props.type,
            value: this.props.value
        };
        return JSON.stringify(dto);
    }
    
    drag(ev: any, id: number, type: VariableType, value: string) {

        
        ev.dataTransfer.setData("objects/variable", this.getDataTransferObj());
    }
}