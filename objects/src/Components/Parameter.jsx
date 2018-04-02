/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";

type Props = {

};

type State = {
    
};


export class Parameter extends React.Component<Props, State>{
    props: Props;
    state: State;
    defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    getClassName(){
        return "parameter-slot number" // todo implement properly
    }

    render(){
        return (

            <div className={this.getClassName()} onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>


            </div>

        )


    }

    allowDrop(ev) {
		console.log("in allow drop in method pill");
        ev.preventDefault();
	}
	
	drop(ev) { // change this to add
		console.log("in drop in method pill"); 
		ev.preventDefault();
		console.log(ev);
        var data = ev.dataTransfer.getData("text");
		console.log(data);
		console.log(document.getElementById(data));
		console.log("+++");
        ev.target.appendChild(document.getElementById(data));
    }


}





