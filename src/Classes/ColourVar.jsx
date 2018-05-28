/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { VariableStore } from "../Classes/VariableStore";
import triangle from "../img/colourVarWhite.png";


export class ColourVar implements IVariableDefinition{
    id: number;
    _red: number;
    _green: number;
    _blue: number;
    type = "colour";


    constructor(red:number, green: number, blue: number){
        this._red = red;
        this._green = green;
        this._blue = blue;
        VariableStore.registerVar(this);

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

        return <img src={triangle} />;

        
    }

    getCustomStyles(){
        return {backgroundColor: this.toColourString()}
    }

    onClick(){ return;}
    

    }

    





