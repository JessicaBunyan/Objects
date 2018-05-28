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
import { DevTools } from "./DevTools";
import { TestVar } from "../Classes/TestVar";
import { ItemFrame } from "./ItemFrame";

type Props = {

};

type State = {
    inventory: IVariableDefinition[],
    gameState: boolean[];
    itemInFrame: any;
};


export class Game extends React.Component<Props, State>{
    props: Props;

    state: State;
    constructor(props: Props){
        super(props);
        this.state = {
            inventory: [],
            gameState: [true],
            itemInFrame: null
        }

    }

    getInventoryItems(): React.Element<any>[]{
        var elements = [];
        for (var i=0; i <this.state.inventory.length; i++){
            var def = this.state.inventory[i];

            console.log("in get inventory items");
    
            const element = <Variable game={this} key={i} var={def} />
            
            // const element = varFac.buildVar(i, def.id, def.type, def.value);
            
            elements.push(element);
            
        }
        return elements;
    }

 

    render(){

        let devTools = null;

        // uncomment below for devtools
        // devTools = <DevTools game={this} gameState={this.state.gameState} inventory={this.state.inventory} />


        return (
            <div className="wrapper">
                <Viewport game={this} gameState={this.state.gameState}  >
                    <InventoryBar inventory={this.state.inventory} >
                            {this.getInventoryItems()}
                    </InventoryBar>
                    <ItemFrame game={this}>
                        {this.state.itemInFrame}
                    </ItemFrame>
                </Viewport>
                {devTools}
            </div>
            );
    }

    putItemInFrame(item: any){
        this.setState({itemInFrame: item});
    }
    removeItemFromFrame(){
        this.setState({itemInFrame: null});
    }

    returnItemToInventory(varDef: IVariableDefinition){
        const newInv = this.state.inventory;
        newInv.push(varDef);
        this.setState({inventory: newInv});
    }

    addItemToInventory(def: IVariableDefinition){
        const newInv = this.state.inventory;
        newInv.push(def);
        console.log("new inv");
        console.log(newInv);
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





