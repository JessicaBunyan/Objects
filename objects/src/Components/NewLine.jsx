

import React from "react";
import _ from "underscore";

export class Line extends React.Component{
    constructor(props){
        super(props);
        console.log("new line" + this.props.going);
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
        <div className={aclass}> i'm a line {this.props.text} </div>
        )
    }
}