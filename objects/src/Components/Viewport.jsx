// @flow
import React from 'react';
import {Scene1} from "./Scene1";
import {NavScene1} from "./NavScene1";
import {Scene0} from "./Scene0";
import {RNGScene} from "./RNGScene";
import {Inventory} from "../Classes/Inventory";
import {InventoryBar} from "./InventoryBar";
import { Game } from './Game';


type Props = {

	game: Game
};
type State = {
};

export class Viewport extends React.Component<Props, State>{
	props: Props;
	state: State;
	constructor(props: Props){
		super(props);
	}
	getScene(active: boolean, complete: boolean){
		let scene0 = <Scene0 parent={this} />
		let scene1 = <Scene1 parentScene={scene0} active={active} complete={complete} game={this.props.game}/>
		return scene1;
	}

	render(){ 
		let scene0 = <Scene0 />

		return (
			<div id="viewport"> 
				<InventoryBar inventory={this.props.game.getInventory()} />
				<NavScene1 active={true} game={this.props.game} >
				
					{this.getScene(false, false)}
					<RNGScene game={this.props.game}/>
				</NavScene1>
			</div> 
			);
	}
}