import * as React from "react";
import { Scene, SceneProps } from "./Scene";

export class NavSceneProps extends SceneProps{
    children: Scene[];
    // ac
}

type State = {
    active: boolean,
}

export class NavScene<NavSceneProps, S> extends Scene<NavSceneProps, S> {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    
    render() {
        // const class = this.props.active
        let className = "scene one-of-four ";
        className += this.state.active ? "active " : "";
        return (
            <div className="scene one-of-four active">
            
                <div onClick={() => this.setState({active: true})}>
                    {this.props.children}
                </div>
            </div>
            
            
        );
    }
}