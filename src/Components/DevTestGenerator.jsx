/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Game } from "./Game";
import {IColourDefinition} from "../Interfaces/IVariableDefinition"
import { ColourVar } from "../Classes/ColourVar";
import { TestVar } from "../Classes/TestVar";
import { NumberVar } from "../Classes/NumberVar";

type Props = {
    game: Game
};

type State = {

};


export class DevTestGenerator extends React.Component<Props, State>{
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
            <div className="dev-test-generator">
            <h4>Test</h4>

            <button id="dev-test-button" onClick={() => this.buttonClicked()}>
                Random Test
            </button> 

            </div>


        )

    }


    buttonClicked(){
        // const def: ColourDefinition = {
        // };



        const def = new TestVar();

        this.props.game.addItemToInventory(def)
    }


}





