// @flow
import * as React from "react";
import {ConstructorPillar} from "./ConstructorPillar";
import {MethodPillar} from "./MethodPillar";
import {Square } from "../Classes/Square";
import {Scene, SceneProps} from "./Scene";
import {Scene1AvatarContainer} from "./Scene1AvatarContainer";
import {GroundFooter} from "./GroundFooter"

export class ObjectSceneProps {
    index: number;
    parentScene: Scene;
    exitSceneCallback: () => void;
    complete: boolean;
    active: boolean;
}
type State = {
	complete: boolean,
	square?: Square,
}


export class ObjectScene extends Scene{
    props: ObjectSceneProps;

    static defaultProps = {
        complete: false,
        active: false,
    }

    getClassName(): string {
        console.log("in get classname default obj secne");
        const p1 =  this.props.active ? "scene active " : "scene  ";
        return p1 + " S0" + this.props.index;

    }

    getPillar(){
        
        let pillar;
        if (!this.state.complete){
			pillar = <ConstructorPillar bottom={100}
			onComplete={() => this.onComplete()}
			/>
		} else {
			pillar = <MethodPillar bottom={100}
						onComplete={(size) => this.setState({square: new Square(size)})}
						/>
        }
        return pillar;
    }

    getAvatarContainer(){
        return <Scene1AvatarContainer  square={this.state.square} />
    }

    getFooter(){
        return ( <GroundFooter 
					onReturn={() => this.props.exitSceneCallback()} 
					enabled={this.state.complete} 
					flash={this.state.complete} 
					active ={this.props.active} />  	);
    }

    render(){
		let pillar = this.getPillar();
        let className= this.getClassName();
        let avContainer = this.getAvatarContainer();
        let footer = this.getFooter();
		
		return (
			<div  className={className}>
					{pillar}
                    {avContainer}
                    {footer}
                    

                  </div> 
                  
			);
    }
    
    onComplete(){
        console.error("Default onComplete used for object scene. ")
    }    








} 