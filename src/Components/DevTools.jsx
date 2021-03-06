/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Game } from "./Game";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { DevNumberGenerator } from "./DevNumberGenerator";
import { DevColourGenerator } from "./DevColourGenerator";
import { DevTestGenerator } from "./DevTestGenerator";

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
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    render(){
        

        return(
            <div className="dev-tools">
            <h3>Dev Tools</h3>
                <DevNumberGenerator game={this.props.game}
                />

                <DevColourGenerator game={this.props.game} />
                <DevTestGenerator game={this.props.game} />
                <div className="unlock">
                <h4>Scenes </h4>

                    <button className="unlock-all-levels"
                        onClick={() => this.props.game.dev_unlockAllScenes()}
                        >
                        Unlock all scenes
                    </button>
                </div>
            </div>

        )
    }


}





