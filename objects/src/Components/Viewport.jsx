// @flow
import React from 'react';
import {Scene1} from "./Scene1";
import {NavScene1} from "./NavScene1";
import {Scene0} from "./Scene0";


type Props = {};
type State = {};

export class Viewport extends React.Component<Props, State>{
	getScene(active: boolean, complete: boolean){
		let scene0 = <Scene0 parent={this} />
		let scene1 = <Scene1 parentScene={scene0} active={active} complete={complete}/>
		return scene1;
	}
	render(){ 
		let scene0 = <Scene0 />

		return (
			<div id="viewport"> 
			<NavScene1 active={true}>
			
				{this.getScene(false, false)}
			
			</NavScene1>
			</div> 
			);
	}
}