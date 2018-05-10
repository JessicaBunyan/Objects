
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
        console.log(value.toColourString());
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

    reconstructVar(json: string){
        var obj = JSON.parse(json);

        if(obj.type === "colour"){
            console.log(obj.value._red);
            obj.value = new ColourDefinition(obj.value._red,obj.value._green,obj.value._blue)
        }

        return obj
    }

}