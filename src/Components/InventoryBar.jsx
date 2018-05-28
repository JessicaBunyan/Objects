/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
// import { Inventory } from "../Classes/Inventory";
import { Variable } from "./Variable";
import { TestVar } from "../Classes/TestVar";

type Props = {
    children: React.Element<any>[],
    inventory: any[]
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
        if (!this.props.inventory || this.props.inventory.length === 0){
            return "";
        }
        // console.log("in get items returning  " + this.props.inventory[0]);
        const {children} = this.props; 


        var childrenToRender = React.Children.map(children, (child, index) => {
            return (
            <div className="inv-item-holder">
                {React.cloneElement(child)}
            </div>

            )
        });

        return childrenToRender;
    }

    render(){ // TODO-TB implement for real

        const cl = this.props.inventory.length === 0 ? "empty" : "";
		return (<div id="inventory" className={cl}>
            <div className="inventory-items">
        {this.getItems()}
                </div>
		</div>)
	}




}





