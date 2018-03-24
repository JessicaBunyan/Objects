// @flow
import * as React from "react";
import { Scene } from "./Scene";

export class NavSceneProps {
    children: Scene[]
    // ac
}

type State2 = {
    activeScene: Scene
}

export class NavScene extends Scene {
     props: NavSceneProps;
     state: State2;

    constructor(props: NavSceneProps){
        super(props);
        this.state = {
            activeScene: this
        }
    }

    isActive(): boolean {
        console.log("in is active. Active scene is");
        console.log(this.state.activeScene);
        return this.state.activeScene === this;
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
                <div className="nonexist"
                 onClick={() => { this.isActive() ? this.setState({activeScene: child}) : console.log("not setting child as active") }}>

                    {React.cloneElement(child, {active: this.state.activeScene === child,
                                                 exitSceneCallback: this.getChildExitCallback(),
                                                 index: index

                                                })}
            </div>
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
            navScene.setState({activeScene: navScene});
        }
    }
    
}