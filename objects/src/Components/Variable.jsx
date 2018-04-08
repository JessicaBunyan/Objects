// @flow


import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { VariableType } from "../Interfaces/VariableTypes";

export interface VarProps {
    id: number,
    type: VariableType,
    value: string
};



export class Variable extends React.Component<VarProps, any>{

    constructor(props: VarProps){
        super(props);

    }



    getClassName(){
        return "inventory-item " // TODO-TB include types here?
    }

    render() {
        return (

            <div draggable="true" 
                    onDragStart={(event) => this.drag(event, this.props.id, this.props.type, this.props.value)} 
                    className={this.getClassName()}
                    data-var-id={this.props.id}
                    data-var-type={this.props.type}
                    data-var-value={this.props.value}
                    >
                {this.props.value}
            </div>

        );
    }

    
    drag(ev: any, id: number, type: VariableType, value: string) {

        var dataTransferObj: IVariableDefinition = {
            id: id,
            type: type,
            value: value
        };
        console.log("IN DRAG");
        console.log(dataTransferObj);
        console.log(JSON.stringify(dataTransferObj));
        
        ev.dataTransfer.setData("objects/variable", JSON.stringify(dataTransferObj));
    }
}