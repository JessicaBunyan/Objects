/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Game } from "./Game";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";

type Props = {
    game: Game,
    gameState: boolean[],
    inventory: IVariableDefinition[]
};

type State = {

};


export class DevTools extends React.Component<Props, State>{
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
        

        return(
            <div class="dev-tools">

            </div>

        )
    }


}





