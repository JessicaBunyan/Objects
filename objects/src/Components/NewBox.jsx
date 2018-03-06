import React from "react";
import _ from "underscore";


export class NewBox extends React.Component{
    constructor(props){
        super(props);
        this.setupState();


        this.startLineTimers();
    }
    setupState(){
        var state = {
            internalLines: []
        };

        var indexes = _.range(0, this.props.numberOfLines);
        _.map(indexes, () => {
            state.internalLines.push(new NewLine({
                text: ""
            }));
        });




        this.state = state; // not sure we can set state multiple times safely
    }
    setupLineDuration(){
        return 1000 * 3.8 // TODO  implement forreal
    }

    startLineTimes(){
        
        var timers = _.range(0, this.props.numberOfLines, ());
        _.map(timers, (index, timer) => {

            _.delay(() => {
                
            }, 1000 * this.props.lineDuration)
        } )
    }

    getLines(){
        var arr = [];
        _.each(this.state.Lines, (index, line) => {
            arr.push(line.getText());
        });
    }




}
