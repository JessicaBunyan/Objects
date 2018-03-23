import { AvatarContainer } from "./AvatarContainer";
import React from 'react';
import square from "../img/square.png";
import type {Square} from "../Classes/Square";
import dot from "../img/dot.png"
import {TextBox} from "./TextBox";
// import {NewBox} from "./NewBox";

type Props = {
    square: Square,

}

type State = {
    image: string,
    text: string,

}

export class Scene1AvatarContainer extends AvatarContainer<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            image: "",
          text: "" 
        };
        


    }
    getImage(){
        console.log(this.props.square);
        if(!this.props.square){
            return null;
        } else{
            if (!this.props.square.size){
                console.log("showing dot");
                return (<img src={dot} />);
            }
            const size = this.props.square.size * 30;
            const style = {
                height: size,
                width: size,
                top: 30 * (10-this.props.square.size)
            }
            return (
                <img src={square} style={style} />
            )
        }


    }

    render(){
        let speechBox
        console.log("in render");
        console.log(this.props.square);

        if (this.props.square){
            if (this.props.square.size === 0){

                console.log("setting speech box");
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


        return(
            <div className="avatar-region">
            <div className="canvas">
                {this.getImage()}

            </div>
            {speechBox}
            </div>
        )
    }
}
