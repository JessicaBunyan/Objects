/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { Game } from "./Game";
import { Variable } from "./Variable";
import { VariableFactory } from "./VariableFactory";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { VariableType } from "../Interfaces/VariableTypes";

type Props = {
    game: Game,
    type: VariableType,
    variable: IVariableDefinition,
    updateState: (v: IVariableDefinition) => void
};

type State = {
    
};

const varFac = new VariableFactory();

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
        // console.log(this.props.variable.value);
        if (this.props.variable){
            return varFac.buildVar(0,
                this.props.variable.id,
                this.props.variable.type,
                this.props.variable.value
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
        var json = ev.dataTransfer.getData("objects/variable");
        

        

        var obj = varFac.reconstructVar(json)

        if (obj.type !== this.props.type){
            // need to handle this properly
            return;
        }

        this.props.game.removeItemFromInventory(obj.id);
        this.props.updateState(obj);

    }


}





