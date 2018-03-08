import { AvatarContainer } from "./AvatarContainer";
import React from 'react';
import square from "../img/square.png";
import dot from "../img/dot.png"
import {SpeechBox} from "./SpeechBox";
import {NewBox} from "./NewBox";

export class Scene1AvatarContainer extends AvatarContainer{
    constructor(props){
        super(props);
        this.state = {
            image: null,
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
                width: size
            }
            return (
                <img src={square} style={style} />
            )
        }
        

    }

    render(){
        let speechBox
        console.log("in render");
        console.log(this.state.square);
        if (this.props.square){
            console.log("setting speech box");
            speechBox = <NewBox text={["Hey there amigo! I'm Mr Square!",
             ".",
             "...",
             "What do you mean I'm a dot?"]} />
        }
        return(
            <div className="avatar-container">
            <div className="canvas">
                {this.getImage()}
            
            </div>
            {speechBox}
            </div>
        )
    }
}