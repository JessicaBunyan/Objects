

// @flow
import React from "react";
import _ from "underscore";

type Props = {
    going: boolean,
    text: string,

}
type State ={

}

export class Line extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        console.log("new line" +  this.props.going.toString());
        this.state = {
            class: this.props.going ? "text show" : "text"
        }
    }


    // getText(){
    //     return `<span class="${this.state.class}"> ${this.props.text} </span>`;
    // }
    render(){
        const aclass = this.props.going ? "text show" : "text";
        return (
        <div className={aclass}> {this.props.text} </div>
        )
    }
}