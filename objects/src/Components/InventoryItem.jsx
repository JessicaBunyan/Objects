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

            <div className={this.getClassName()} >
                {this.props.item}
            </div>

        );
    }

}