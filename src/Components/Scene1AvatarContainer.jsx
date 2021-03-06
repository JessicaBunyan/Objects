// @flow
import { AvatarContainer } from "./AvatarContainer";
import React from 'react';
import square from "../img/square.png";
import type {Square} from "../Classes/Square";
import dot from "../img/dot.png"
import grandpaSquare from "../img/grampasquare.png";
import {TextBox} from "./TextBox";
// import {NewBox} from "./NewBox";

type Props = {
    square: Square | null,

}

type State = {
    image: string,
    text: string,

}

export class Scene1AvatarContainer extends AvatarContainer{
    props: any;
    state: any;
    constructor(props: Props){
        super(props);
        this.state = {
            image: "",
          text: "" 
        };
        
 

    }
    getImage(){
        if(!this.props.square){
            return null;
        } else{
            if (!this.props.square.size){
                return (<img className="dot" src={dot} />);
            }
            const size = this.props.square.size * 30;
            const style = {
                height: size,
                width: size,
                top: 30 * (10-this.props.square.size)
            }
            return (
                <img src={grandpaSquare} style={style} />
            )
        }


    }

    getTextBox(){

        let speechBox

        if (this.props.square){
            if (this.props.square.size === 0){

                speechBox = <TextBox key="first" text={["Hey there amigo! I'm Mr Square!",
                ".",
                "...",
                "What do you mean I'm a dot?"]} />
            } else {
                speechBox = <TextBox key="second" text={[
                    "Muuuuch better!",
                    "Look at me!",
                    "I'm big now",
                    "Could be bigger though",
                ]} />
            }
        }

        return speechBox;
    }


}
