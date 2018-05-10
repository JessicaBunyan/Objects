// @flow
import * as React from 'react';
import {SquareScene} from "./SquareScene";
import {NavScene1} from "./NavScene1";
import {Scene0} from "./Scene0";
import {RNGScene} from "./RNGScene";
import {InventoryBar} from "./InventoryBar";
import { Game } from './Game';
import { PaintbrushScene } from './PaintbrushScene';
import { PaintFactoryScene } from './PaintFactoryScene';


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

	render(){ 
		let scene0 = <Scene0 />

		console.log("in render");
		console.log(this);
		console.log(this.props.children);
		return (
			<div id="viewport"> 
				<NavScene1 active={true} game={this.props.game} >
				
					<SquareScene parentScene={scene0} active={false} isInstantiated={false} game={this.props.game}/>
					<RNGScene game={this.props.game}/>
					<PaintbrushScene game={this.props.game} />
					<PaintFactoryScene game={this.props.game} />
				</NavScene1>
			</div> 
			);
	}
}