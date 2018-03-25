/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Inventory } from "../Classes/Inventory";
import {Viewport} from "./Viewport";

type Props = {

};

type State = {
    inventory: any[]
};


export class Game extends React.Component<Props, State>{
    props: Props;
    state: State;
    constructor(props: Props){
        super(props);
        this.state = {
            inventory: []
        }
    }
    render(){

        return (<Viewport game={this} />);
    }

    addItemToInventory(item: any){
        const newInv = this.state.inventory;
        newInv.push(item);
        this.setState({inventory: newInv});
    }

}





