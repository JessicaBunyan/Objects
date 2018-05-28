// @flow
import * as React from "react";
import { Scene } from "./Scene";
// import { Inventory } from "../Classes/Inventory";
import { Game } from "./Game";
import _ from "underscore";

export class NavSceneProps {
    children: Scene[]
    game: Game
    // ac
}

type State2 = {
    activeScene: string
}

export class NavScene extends Scene {
     props: NavSceneProps;
     state: State2;

    constructor(props: NavSceneProps){
        super(props);
        console.error("in nav scene constr");
        this.state = {
            activeScene: this.getSceneID()
        }
    }

    getSceneID():string {
        console.error("Using default scene ID for navscene");
        return "NavScene";
    }
    

    isActive(): boolean {
        return this.state.activeScene === this.getSceneID();
    }

    getClassNameAppendage(): string{
        switch(this.getNumActiveChildren()){
            case 1:
            return "one";
            case 2:
            return "two";
            case 3:
            return "three";
            case 4:
            case 5:
            return "four-to-five";
            default: 
            return "six-to-nine"
        }
    }

    setActiveScene(scene: any) {
        this.setState({activeScene: scene.getSceneID()})
    }

    getNumActiveChildren(){

        let count = 0;
		this.props.children.forEach((child, index) => {
            if (this.props.game.state.gameState[index]){
                count ++;
            }            
        })
        return count;
	}
    
    render() {
        // const class = this.props.active
        let className: string = "scene nav-scene ";
        className += this.isActive() ? "active " : "transient ";
        className += this.getClassNameAppendage();

 
        const { children} = this.props; 
        console.log(this.props.children);
        console.log(React.Children);
        var childrenToRender = React.Children.map(children, (child, index) => {
            return (
                    React.cloneElement(child, {activeScene: this.state.activeScene,
                                                 exitSceneCallback: this.getChildExitCallback(),
                                                 index: index,
                                                 onClick: (sceneID) => { 
                                                    this.isActive() ? this.setState({activeScene: sceneID}) : 
                                                    console.log("not setting child as active")
                                                }

                                                })
            )
        });



        console.log(childrenToRender);


        return (
            <div className={className}>
            
                {/* <div onClick={() => this.setState({active: false})}> */}
                    {childrenToRender}
                {/* </div> */}
            </div>
            
            
        );
    }

    getChildExitCallback(){
        const navScene = this;
        return function(){
            navScene.setState({activeScene: navScene.getSceneID()});
        }
    }
    
}