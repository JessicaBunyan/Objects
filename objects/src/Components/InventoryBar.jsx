/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
// import { Inventory } from "../Classes/Inventory";
import { InventoryItem } from "./InventoryItem";

type Props = {
    children: React.Element<any>[]
};

type State = {

};


export class InventoryBar extends React.Component<Props, State>{
    props: Props;
    state: State;
    static defaultProps = {
        inventory: []
    };
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
        // console.log("in get items returning  " + this.props.inventory[0]);
        const {children} = this.props; 


        var childrenToRender = React.Children.map(children, (child, index) => {
            return (
            // </div>
                React.cloneElement(child)

            )
        });

        return childrenToRender;
    }

    render(){ // TODO-TB implement for real
		return (<div id="inventory" >
            test        
        {this.getItems()}
                
		</div>)
	}




}





