// @flow
import * as React from "react";
// import type {_} from "underscore";
import _ from "underscore";
import {Line} from "./TextBoxLine";


type Props = {
    text: string[]
};

type State = {
    shouldLineStartDisplaying: bool[],
    lineOutputDuration: number,
    numberOfLines: number
}; 

export class TextBox extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = this.setupState();
        this.startLineTimers();
    }

    setupState(): State{
        var state: State = {
            shouldLineStartDisplaying: [],
            lineOutputDuration:  1000 * 3.8,// TODO  implement forreal
            numberOfLines: this.props.text.length
        };
          state.numberOfLines;
          this.props.text
        // state.lineOutputDuration

        // state.numberOfLines =

        const indexes = _.range(0, state.numberOfLines);
        _.map(indexes, () => {
            state.shouldLineStartDisplaying.push(false);
        });


        return state;
    }

    render(){
        var listOfLines = this.props.text.map((line: string, index: number) => <Line key={index} going={this.state.shouldLineStartDisplaying[index]} text={line} />);


        return (
            <div className="speech-box">
                {listOfLines}
            </div>
        )
    }

    // setupLineDuration(){
    //     return 1000 * 3.8 // TODO  implement forreal
    // }

    startLineTimers(): void{

        var timers: number[] = _.range(0, this.state.numberOfLines);
        var me: TextBox = this;
        _.each(timers, (index, timer) => {

            _.delay(() => {
                const shouldLines = this.state.shouldLineStartDisplaying;
                shouldLines[index] = true;
                me.setState({shouldLineStartDisplaying: shouldLines});
            }, (this.state.lineOutputDuration * index) + 100)
        })
    }



}
