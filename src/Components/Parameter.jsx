/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { Game } from "./Game";
import { Variable } from "./Variable";
import { VariableType } from "../Interfaces/VariableTypes";
import { VariableStore } from "../Classes/VariableStore";

type Props = {
    game: Game,
    type: VariableType,
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
        let base = "parameter "
        base += this.props.type;
        return base;
    }

    getVariable(){
        if (this.props.variable){
            return (
                <Variable game={this.props.game} var={this.props.variable} />
            )
        }

        return null;

    }


    render(){
        return (

            <div className="parameter-slot"
            onDrop={(event) => this.drop(event)} 
            onDragOver={(event) => this.allowDrop(event)}>
                <div className="param-wrapper">
                    <div className={this.getClassName()} >

                        {this.getVariable()}
                    
                    </div>
                </div>    
            </div>  
        )


    }

    allowDrop(ev: any) {
		console.log("in allow drop in method pill");
        ev.preventDefault();
	}
	
	drop(ev: any) { 
		ev.preventDefault();
        var id = ev.dataTransfer.getData("objects/variable");
        

        
        
        // var obj = varFac.reconstructVar(json)
        var obj = VariableStore.getVar(id);

        console.log("reconstructed");
        console.log(obj);

        if (obj.type !== this.props.type){
            // need to handle this properly
            return;
        }

        this.props.game.removeItemFromInventory(obj.id);
        this.props.updateState(obj);

    }


}





