/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "./Variable";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { Game } from "./Game";

interface ColourProps extends VarProps {
    value: ColourDefinition
};

type State = {

};


export class ColourVar implements IVariableDefinition{
    // props: ColourProps;
    // state: State;
    // defaultProps = {

    // };
    // constructor(props: ColourProps){
    //     console.log("in colour var");
    //     console.log(props);
    //     this.state= {

    //     }
    // }
    id: number;
    _red: number;
    _green: number;
    _blue: number;
    type = "colour";

    static build(dto: any){

        const id = dto.id ? dto.id : Game.getVariableId();

        return new ColourVar(dto.red, dto.green, dto.blue);

    }


    constructor(red:number, green: number, blue: number, id?: number){
        this._red = red;
        this._green = green;
        this._blue = blue;
        if (id){
            this.id = id;
        }
    }

    toString(): string{
        return "" + 
            this._red + 
            this._green +
            this._blue
    }

    scaleInt(num: number){
        return Math.floor(num / 10 * 255).toString(16); //tostring(16) turns it to hexadecimal
    }

    getRed(){
        return this.scaleInt(this._red);
    }

    getBlue(){
        return this.scaleInt(this._blue);
    } 
    getGreen(){
        return this.scaleInt(this._green);
    }

    toColourString():string{
        var r = this.getRed();
        var g= this.getGreen();
        var b = this.getBlue();
        const str = `#${r}${g}${b}`
        console.log(str);
        return str;

    
    }

    getClassName(){
        return "inventory-item colour"
    }

    getValue(){
        return ""
    }

    getImage(){
        return "";

        
    }

    onClick(){ return;}
    getDataTransferObj(){
        console.log("in get dto");

        const obj = {
            red: this._red,
            blue: this._blue,
            green: this._green
        }

        // console.log(JSON.stringify(this));
        return obj;
    }

    // render(){
    //     return(

    //         <div draggable="true" 
    //         onDragStart={(event) => this.drag(event, this.props.id, this.props.type, this.props.value)} 
    //         className={this.getClassName()}
    //         data-var-id={this.props.id}
    //         data-var-type={this.props.type}
    //         data-var-value={this.getValue()}
    //         // style={{borderBottomColor: "red"}}
    //         style={{borderBottomColor: this.props.value.toColourString()}}
    //         >
    //         </div>
    //     );

    //     }
        

    }

    





