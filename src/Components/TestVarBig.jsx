/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";

type Props = {
    var: IVariableDefinition;
};

type State = {

};


export class TestVarBig extends React.Component<Props, State>{
    props: Props;
    state: State;
    defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    render(){
        return (

            <div className="test-var-big"
                 onClick={(event) => this.onClick(event)}>

            </div>
        )
    }

    onClick(event: any){
        console.log("clicked");
        event.stopPropagation();
        return false;
    }

}





