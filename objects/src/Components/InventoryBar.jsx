/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Inventory } from "../Classes/Inventory";

type Props = {
    inventory: any[]
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
        console.log("in get items");
        console.log(this.props);
        if (!this.props.inventory || this.props.inventory.length === 0){
            console.log("returning nothin in get itesm2");
            return "";
        }
        console.log("in get items returning  " + this.props.inventory[0]);
        return (<div className="inventory-item"> ${this.props.inventory[0]} </div>); // todo fix
    }

    render(){ // TODO-TB implement for real
		return (<div id="inventory" >
            test        
        {this.getItems()}
                
		</div>)
	}




}





