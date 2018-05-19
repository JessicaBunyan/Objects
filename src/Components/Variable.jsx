// @flow


import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { VariableType } from "../Interfaces/VariableTypes";
import { Game } from "./Game";

export interface VarProps {
    game: Game;
    var: IVariableDefinition
};



export class Variable extends React.Component<VarProps, any>{

    constructor(props: VarProps){
        super(props);
        props.var.game = this.props.game;
    }

    render() {
        console.log("in var render");
        console.log(this.props.var);
        const val = this.props.var;

        return (

            <div draggable="true" /*  */
                    onDragStart={(event) => this.drag(event)} 
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

        
    drag(ev: any) {
        const val = this.props.var;
        ev.dataTransfer.setData("objects/variable", val.id);
    }
    
}