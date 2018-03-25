/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Inventory } from "../Classes/Inventory";

type Props = {
    inventory: Inventory
};

type State = {

};


export class InventoryBar extends React.Component<Props, State>{
    props: Props;
    state: State;
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }

    getItems(): any{
        if (!this.props.inventory.items || this.props.inventory.items.length === 0){
            console.log("returning nothin in get itesm2");
            return "";
        }
        console.log("in get items returning  " + this.props.inventory.items[0]);
        return (<div class="inventory-item"> ${this.props.inventory.items[0]} </div>); // todo fix
    }

    render(){ // TODO-TB implement for real
		return (<div id="inventory" >
            test        
        {this.getItems()}
                
		</div>)
	}




}





