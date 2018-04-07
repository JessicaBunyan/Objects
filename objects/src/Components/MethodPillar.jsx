// @flow
import React from 'react';
import _ from "underscore";

import {ConstructorButton} from "./ConstructorButton"
import {MethodButton} from "./MethodButton"
import {Parameter} from "./Parameter"
import postbox from "../img/postbox.png";
import $ from 'jquery'; 
import { Game } from './Game';
import { VariableType } from '../Interfaces/VariableTypes';
import { IVariableDefinition } from '../Interfaces/IVariableDefinition';


type Props ={ 
	onComplete: (n: number) => void,
	game: Game,
	parameters: VariableType[]
};
type State = {
	enabled: boolean,
	clicked: boolean,
	text?: "",
	parameterStates: IVariableDefinition[]
}; 

export class MethodPillar extends React.Component<Props, State> {

	constructor(props: Props){
		super(props);
		let initialParamStates = [];
		_.each(this.props.parameters, (param) => {
			initialParamStates.push(null);
		})
		this.state= {
			enabled: this.isEnabled(),
			clicked: false,
			parameterStates: initialParamStates
		}
    }
    
	isEnabled(){
		return true; 
	}

	getParams(){
		var elements = [];
		this.props.parameters.forEach((param, index) => {
			console.log("====== in each");
			console.log(param);
			console.log(index);
			var el = <Parameter 
						key={index}
						game={this.props.game}
						updateState={(varDef) => this.updateParamState(index, varDef)}
						variable={this.state.parameterStates[index]}
						
						/>
			elements.push(el);

		});
		return elements;
	}

	updateParamState(index: number, varDef: IVariableDefinition){
		var newStates = this.state.parameterStates;
		newStates[index] = varDef;
		this.setState({parameterStates: newStates});
	}

	getButtonState(){
		var allParamsPopulated = true;
		this.state.parameterStates.forEach((state) => {
			if (state === null){
				allParamsPopulated = false;
			}
		})

		return allParamsPopulated;
	}

	render(){
		return (
  			<div className="pillar-region">
                <div className={this.state.clicked ? "clearfix visible" : "clearfix visible"}> 
                    <img src={postbox}
                    className="pillar"
                    />
					<MethodButton 
						style={`left: "75px"`} 
						clicked={this.state.clicked} 
						onClick={(e: JQueryEventObject) => this.buttonClicked(e)} 
						enabled={this.getButtonState()}/>
				</div>
				<div className="parameter-region">
					{this.getParams()}
				</div>

				
    		</div>
    	);
	}

	buttonClicked(e: JQueryEventObject){
		if (this.state.enabled === false){
			return; 
		}

		const $button = $(e.currentTarget);
		// this.setState({
		// 	text: "",
		// 	clicked: true
		// });
        // this.props.onComplete();
        
		setTimeout(() => this.props.onComplete(1+ (Math.random() * 9)), 30);

	}



}