/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Game } from "./Game";
import { NumberVar } from "../Classes/NumberVar";

type Props = {
    game: Game
};

type State = {

};


export class DevNumberGenerator extends React.Component<Props, State>{
    props: Props;
    state: State;
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }
    render(){

        return (
            <div className="dev-number-generator">
            <h4>Numbers</h4>
            <input id="dev-number-input" type="textbox" defaultValue="5">
            </input> 
            <button id="dev-number-button" onClick={() => this.buttonClicked()}>
                Generate
            </button> 

            </div>


        )

    }


    buttonClicked(){
        this.props.game.addItemToInventory(new NumberVar($("#dev-number-input").val()));
    }


}





