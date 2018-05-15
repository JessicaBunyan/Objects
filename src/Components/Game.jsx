/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
// import { Inventory } from "../Classes/Inventory";
import {Viewport} from "./Viewport";
import { InventoryBar } from "./InventoryBar";
import { Variable } from "./Variable";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { VariableType } from "../Interfaces/VariableTypes";
import { VariableFactory } from "./VariableFactory";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { DevTools } from "./DevTools";

type Props = {

};

type State = {
    inventory: IVariableDefinition[],
    gameState: boolean[];
};

const varFac: VariableFactory = new VariableFactory();

export class Game extends React.Component<Props, State>{
    props: Props;
    state: State;
    static varID = 0;
    constructor(props: Props){
        super(props);
        this.state = {
            inventory: [],
            gameState: [true, false, false, false, false, false, false, false] 
        }

    }

    getInventoryItems(): React.Element<any>[]{
        var elements = [];
        for (var i=0; i <this.state.inventory.length; i++){
            var def = this.state.inventory[i];

            console.log("in get inventory items");
    
            const element = varFac.buildVar(i, def.id, def.type, def.value);
            
            elements.push(element);
            
        }
        return elements;
    }



    render(){

        return (
            <div className="wrapper">
                <Viewport game={this} gameState={this.state.gameState}  >
                    <InventoryBar inventory={this.state.inventory} >
                            {this.getInventoryItems()}
                    </InventoryBar>

                </Viewport>
                <DevTools game={this} gameState={this.state.gameState} inventory={this.state.inventory} />
            </div>
            );
    }

    returnItemToInventory(varDef: IVariableDefinition){
        const newInv = this.state.inventory;
        newInv.push(varDef);
        this.setState({inventory: newInv});
    }

    addItemToInventory(type: VariableType, value: string | ColourDefinition){
        const newInv = this.state.inventory;
        var item: IVariableDefinition = {
            id: Game.getVariableId(),
            type: type,
            value: value
        };
        newInv.push(item);
        this.setState({inventory: newInv});
    }

    removeItemFromInventory(itemID: number){
        let newInv = this.state.inventory;
        newInv = _.reject(newInv, (i: IVariableDefinition) => i.id === itemID);
        this.setState({inventory: newInv});
    }

    getInventory(){
        return this.state.inventory;
    }

    static getVariableId(){
        Game.varID++;
        return Game.varID;
    }

    unlockScene(sceneIndex: number){

        if (!sceneIndex || sceneIndex > this.state.gameState.length){
            return;
        }

        const newState = this.state.gameState;
        newState[sceneIndex] = true;

        this.setState({gameState: newState});

    }

    dev_unlockAllScenes(){
        this.setState({gameState: [true, true, true, true, true, true, true, true]});
    }

}





