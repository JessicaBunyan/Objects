/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { InventoryBar } from "./InventoryBar";
import { Game } from "./Game";

type Props = {
    children?: any[],
    game: Game
    // items?: any[];
};

type State = {

};


export class ItemFrame extends React.Component<Props, State>{
    props: Props;
    state: State;
    static defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {

        }
    }


    render(){

        const className = this.props.children ? "active" : "";

        return (
            <div id="item-frame" 
                 className={className}
                 onClick={() => this.onClick()}>
                        {React.Children.map(this.props.children, (child, index) => {
                            return (React.cloneElement(child))
                        })}

            
                </div>


        );
    }

    onClick(){
        this.props.game.removeItemFromFrame();
    }



}





