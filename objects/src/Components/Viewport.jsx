// @flow
import * as React from 'react';
import {Scene1} from "./Scene1";
import {NavScene1} from "./NavScene1";
import {Scene0} from "./Scene0";
import {RNGScene} from "./RNGScene";
import {InventoryBar} from "./InventoryBar";
import { Game } from './Game';
import { PaintbrushScene } from './PaintbrushScene';


type Props = {
	children: React.Element<any>,
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
		let scene1 = <Scene1 parentScene={scene0} active={active} isInstantiated={complete} game={this.props.game}/>
		return scene1;
	}

	render(){ 
		let scene0 = <Scene0 />

		console.log("in render");
		console.log(this);
		console.log(this.props.children);
		return (
			<div id="viewport"> 
			{React.cloneElement(this.props.children)}
				<NavScene1 active={true} game={this.props.game} >
				
					{this.getScene(false, false)}
					<RNGScene game={this.props.game}/>
					<PaintbrushScene game={this.props.game} />
				</NavScene1>
			</div> 
			);
	}
}