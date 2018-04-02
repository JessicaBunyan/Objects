// @flow


import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";

type Props = {
    item: string | number
};

export class InventoryItem extends React.Component<any, any>{

    constructor(props: Props){
        super(props);

    }

    getClassName(){
        return "inventory-item number" // TODO-TB include types here?
    }

    render() {
        console.log("rendering inv. item");
        console.log(this.props.item);
        return (

            <div id="test" draggable="true" onDragStart={(event) => this.drag(event)} className={this.getClassName()} >
                {this.props.item}
            </div>

        );
    }

    
    drag(ev) {
        console.log("")
        var data = $(ev.target).data("var-id");

        ev.dataTransfer.setData("text", ev.target.id);
    }
}