// @flow
import React from 'react';
import _ from "underscore";

import {ConstructorButton} from "./ConstructorButton"
import {MethodButton} from "./MethodButton"
import {Parameter} from "./Parameter"
import postbox from "../img/postboxGrey.png";
import $ from 'jquery'; 
import { Game } from './Game';
import { VariableType } from '../Interfaces/VariableTypes';
import { IVariableDefinition } from '../Interfaces/IVariableDefinition';


type Props ={ 
	onComplete: (n: number) => void,
	game: Game,
	parameters: VariableType[],
	buttonName: string,
	getClearParamsFunction: (() => void) =>  void,
	getAcceptParamsFuction: (() => IVariableDefinition[]) => void
};
type State = {
	enabled: boolean,
	clicked: boolean,
	text?: "",
	parameterStates: IVariableDefinition[]
}; 

export class MethodPillar extends React.Component<Props, State> {

	static defaultProps = {
		getClearParamsFunction: () => {},
		getAcceptParamsFuction: () => {}
	}
	constructor(props: Props){
		super(props);
		
		this.state= {
			enabled: this.isEnabled(),
			clicked: false,
			parameterStates: this.getInitialParamStates()
		}

		this.props.getClearParamsFunction(() => this.clearParamsForExit()); // may need to populate with null
		this.props.getAcceptParamsFuction(() => this.acceptParamsForExecution());
	}

	clearParamsForExit(){
		this.state.parameterStates.forEach((varDef: IVariableDefinition) => {
			if(varDef){
				this.props.game.returnItemToInventory(varDef);
			}
		});
		this.setState({parameterStates: this.getInitialParamStates()});

	}

	acceptParamsForExecution(){
		var list = []
		this.state.parameterStates.forEach((varDef: IVariableDefinition) => {
			list.push(varDef);
		});
		this.setState({parameterStates: this.getInitialParamStates()});
		return list;
	}

	getInitialParamStates(){
		let initialParamStates = [];
		_.each(this.props.parameters, (param) => {
			initialParamStates.push(null);
		});
		return initialParamStates;
	}
    
	isEnabled(){
		return true; 
	}

	getParams(){
		var elements = [];
		this.props.parameters.forEach((param, index) => {
			var el = <Parameter 
						key={index}
						type={this.props.parameters[index]}
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
						style={`left: "40px"`} 
						clicked={this.state.clicked} 
						onClick={(e: JQueryEventObject) => this.buttonClicked(e)} 
						enabled={this.getButtonState()}
						text ={this.props.buttonName}/>
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