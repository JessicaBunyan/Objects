/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { Game } from "./Game";
import { Variable } from "./Variable";

type Props = {
    game: Game,
    variable: IVariableDefinition,
    updateState: (v: IVariableDefinition) => void
};

type State = {
    
};


export class Parameter extends React.Component<Props, State>{
    props: Props;
    state: State;
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    getClassName(){
        return "parameter-slot number" // todo implement properly
    }

    getVariable(){

        if (this.props.variable){
            return(<Variable
                id={this.props.variable.id}
                type={this.props.variable.type}
                value={this.props.variable.value} />);
        }

        return null;

    }


    render(){
        return (

            <div className={this.getClassName()} 
                onDrop={(event) => this.drop(event)} 
                onDragOver={(event) => this.allowDrop(event)}>
            
                {this.getVariable()}
                

            </div>

        )


    }

    allowDrop(ev: any) {
		console.log("in allow drop in method pill");
        ev.preventDefault();
	}
	
	drop(ev: any) { 
		ev.preventDefault();
        var varDef: IVariableDefinition = ev.dataTransfer.getData("objects/variable");
        varDef = JSON.parse(varDef);

        console.log("IN DROP");
        console.log(varDef);
        this.props.game.removeItemFromInventory(varDef.id);
        this.props.updateState(varDef);

    }


}





