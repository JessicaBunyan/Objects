/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
// import { Inventory } from "../Classes/Inventory";
import {Viewport} from "./Viewport";
import { InventoryBar } from "./InventoryBar";
import { InventoryItem } from "./InventoryItem";

type Props = {

};

type State = {
    inventory: InventoryItem[]
};


export class Game extends React.Component<Props, State>{
    props: Props;
    state: State;
    constructor(props: Props){
        super(props);
        this.state = {
            inventory: []
        }
        this.addItemToInventory(2);
    }

    getInventoryItems(): React.Element<any>[]{
        var elements = [];
        for (var i=0; i <this.state.inventory.length; i++){
            var element = <InventoryItem key={i} item={this.state.inventory[i]} />
            elements.push(element);
            
            // elements.push()
        }
        return elements;
    }

    render(){

        return (<Viewport game={this}  >
                <InventoryBar inventory={this.state.inventory} >
                        {this.getInventoryItems()}
                </InventoryBar>

            </Viewport>
            
            );
    }

    addItemToInventory(item: any){
        const newInv = this.state.inventory;
        newInv.push(item);
        this.setState({inventory: newInv});
    }

    getInventory(){
        return this.state.inventory;
    }
}





