import React from "react";
import _ from "underscore";
import {Line} from "./NewLine";

export class NewBox extends React.Component{
    constructor(props){
        super(props);
        this.setupState();
        console.log("state set up on new box");
        console.log(this.state);

        this.startLineTimers();
    }

    setupState(){
        var state = {
            shouldLineStartDisplaying: [],
            lineOutputDuration:  1000 * 3.8,// TODO  implement forreal
            numberOfLines: this.props.length
        };
        state.lineOutputDuration 
        // state.numberOfLines = 

        const indexes = _.range(0, state.numberOfLines);
        _.map(indexes, () => {
            state.shouldLineStartDisplaying.push(false);
        });


        this.state = state; // not sure we can set state multiple times safely
    }

    render(){
        console.log("in render")
        console.log(this.props.text);
        // console.log(this.state.startLineTimers);
        // console.log(this.props.lines)
        console.log(this.state.shouldLineStartDisplaying);
        var listOfLines = this.props.text.map((line, index) => <Line going={this.state.shouldLineStartDisplaying[index]} text={line} />);
        // _.each(this.props.text, (line, index) => {
        //     listOfLines.push((<Line key={index} going={this.state.shouldLineStartDisplaying[index]} text={line} />)))
        // } 
        console.log(listOfLines);
        // var listOfLines = [];
        // listOfLines.push(<Line key={1} text={"fuck"} />)
        // listOfLines.push(<Line key={2} text={"you"} />)
        
        return (
            <div className="speech-box">   
                {listOfLines}
            </div>
        )
    }

    // setupLineDuration(){
    //     return 1000 * 3.8 // TODO  implement forreal
    // }

    startLineTimers(){
        
        var timers = _.range(0, this.state.numberOfLines);
        var me = this;
        console.log(me);
        console.log("setting timers for");
        console.log((this.state.lineOutputDuration) + 100);
        console.log(timers);
        _.each(timers, (index, timer) => {

            _.delay(() => {
                console.log("triggering set state");
                console.log(me);
                console.log(index);
                const shouldLines = this.state.shouldLineStartDisplaying;
                shouldLines[index] = true;
                console.log(shouldLines);
                me.setState({shouldLineStartDisplaying: shouldLines});
            }, (this.state.lineOutputDuration * index) + 100) 
        } )
    }

    getLines(){
        var arr = [];
        _.each(this.state.Lines, (index, line) => {
            arr.push(line.getText());
        });
    }




}
