
import React from "react";
import { ColourVar } from "./ColourVar";
import { NumberVar } from "./NumberVar";
import { ColourDefinition } from "../Classes/ColourDefinition";


export  class VariableFactory {

    buildNumber(key: number, id: number, value: number): React.Element<any>{
        var element = <NumberVar
        key={key} 
        id={id}
        type={"number"}
        value={value} />
        return element
    }

    buildColour(key: number, id: number, value:ColourDefinition): React.Element<any> {

        console.log("in build colour");
        console.log(value);
        var c = <ColourVar
            key={key}
            id={id}
            type={"colour"}
            value={value}
            />
            return c;

    }

    buildVar(key: number, id: number, type: VariableType ,value: number | ColourDefinition){
        if (type === "number"){
            return this.buildNumber(key,id,value);
        } else{
            return this.buildColour(key,id,value);
        }
    }

}