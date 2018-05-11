// @flow
import * as React from 'react';
import {SquareScene} from "./SquareScene";
import {NavScene1} from "./NavScene1";
import {NullScene} from "./NullScene";
import {RNGScene} from "./RNGScene";
import {InventoryBar} from "./InventoryBar";
import { Game } from './Game';
import { PaintbrushScene } from './PaintbrushScene';
import { PaintFactoryScene } from './PaintFactoryScene';


type Props = {
	children: React.Element<any>,
	game: Game,
	gameState: boolean[]
};
type State = {
};

export class Viewport extends React.Component<Props, State>{
	props: Props;
	state: State;
	constructor(props: Props){
		super(props);
	}

	getSquareScene(){
		let SquareScene3 = <NullScene />

		if (this.props.gameState[0]){
			SquareScene3 = <SquareScene parentScene={NullScene} active={false} isInstantiated={false} game={this.props.game}/>
		}
		return SquareScene3;
	}

	getRNGScene(){
		let scene = <NullScene />
		if (this.props.gameState[1]){
			scene = <RNGScene game={this.props.game}/>;
		}
		return scene;
	}

	getPaintbrushScene(){
		let scene= <NullScene />
		if (this.props.gameState[2]){
			scene = <PaintbrushScene game={this.props.game} />;
		}
		return scene;
	}
	getPaintbrushFactoryScene(){
		let scene= <NullScene />
		if (this.props.gameState[3]){
			scene = <PaintFactoryScene game={this.props.game} />;
		}
		return scene;
	}

	render(){ 

		console.log("in render");
		console.log(this);
		console.log(this.props.children);
		console.log(this.props.game);
		console.log(this.props.game.state);

		let inventoryBar = React.cloneElement(this.props.children)

		let SquareScene2 = this.getSquareScene();
		let RNGScene = this.getRNGScene();
		let PaintbrushScene = this.getPaintbrushScene();
		let PaintbrushFactoryScene = this.getPaintbrushFactoryScene();
		
		return (
			<div id="viewport" className="clearfix"> 
			{inventoryBar} 
				<NavScene1 active={true} game={this.props.game} >
					{SquareScene2}
					{RNGScene}
					{PaintbrushScene}
					{PaintbrushFactoryScene}
					
				</NavScene1>
			</div> 
			);
	}
}