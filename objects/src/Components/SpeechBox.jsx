import React from "react";
import { TextBoxLine } from "./TextBoxLine";
import _ from "underscore"


export class SpeechBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // text: []
        }
        
    }
    componentWillReceiveProps(nextProps){
        console.log("next props");
        console.log(nextProps);
        _.each(nextProps.text, ((line, index) => {
            console.log(index);
            setTimeout(
                () => { this.setState({text: this.state.text.concat([line])}) }
                , index * 2800);
        }));
    }
    render(){
        return (
            <div className="speech-box">
            {this.state.text.map((line, index) => 
                <TextBoxLine key={index} line={line} index={index} />
            )}
            </div>
        )
    }
}
