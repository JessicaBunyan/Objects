// @flow
import * as React from "react";
import { Scene } from "./Scene";
// import { Inventory } from "../Classes/Inventory";
import { Game } from "./Game";

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
        console.log("in is active. Active scene is");
        console.log(this.state.activeScene);
        return this.state.activeScene === this.getSceneID();
    }

    setActiveScene(scene: any) {
        this.setState({activeScene: scene.getSceneID()})
    }
    
    render() {
        // const class = this.props.active
        let className: string = "scene one-of-four ";
        className += this.isActive() ? "active " : "transient ";

 
        const { children} = this.props; 
        console.log(this.props.children);
        console.log(React.Children);
        var childrenToRender = React.Children.map(children, (child, index) => {
            return (
                // <div className="nonexist"
                //  onClick={() => { 
                    // this.isActive() ? this.setState({activeScene: child.getSceneID()}) : 
                    // console.log("not setting child as active") }}>

                    // {console.log("child")}
                    // {console.log(child)}
                    React.cloneElement(child, {activeScene: this.state.activeScene,
                                                 exitSceneCallback: this.getChildExitCallback(),
                                                 index: index,
                                                 onClick: (sceneID) => { 
                                                     console.log("CLICKED");
                                                     console.log("sceneID");
                                                    this.isActive() ? this.setState({activeScene: sceneID}) : 
                                                    console.log("not setting child as active")
                                                }

                                                })
            // </div>
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
        console.log("getting exit callback");
        console.log(this);
        const navScene = this;
        return function(){
            console.log("childExitCallback is being called");
            console.log(navScene)
            navScene.setState({activeScene: navScene.getSceneID()});
        }
    }
    
}