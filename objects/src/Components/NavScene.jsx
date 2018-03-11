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
            active: true
        }
    }
    
    render() {
        // const class = this.props.active
        let className = "scene one-of-four ";
        className += this.state.active ? "active " : "transient ";


        const { children} = this.props;
        console.log(this.props.children);
        console.log(React.Children);
        var childrenToRender = React.Children.map(children, child => {
            return React.cloneElement(child, {active: !this.state.active} )
        });
        console.log(childrenToRender);


        return (
            <div className={className}>
            
                <div onClick={() => this.setState({active: false})}>
                    {childrenToRender}
                </div>
            </div>
            
            
        );
    }
}