
import React from "react";
import { ColourVar } from "./ColourVar";
import { NumberVar } from "./NumberVar";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { TestVar } from "./TestVar";


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

        var c = <ColourVar
            key={key}
            id={id}
            type={"colour"}
            value={value}
            />
            return c;

    }

    buildTest(key: number, id: number, value:ColourDefinition): React.Element<any> {
        
        var t = <TestVar 
            key={key}
            id={id}
            type={"test"}
            value={value}
            />
        return t;
    }

    buildVar(key: number, id: number, type: VariableType ,value: number | ColourDefinition){
        
        switch(type){
            case "number":
                return this.buildNumber(key,id,value);
            case "colour":
                return this.buildColour(key,id,value);
            case "test":
                return this.buildTest(key, id, value);

        }
    }

    reconstructVar(json: string){
        var obj = JSON.parse(json);

        if(obj.type === "colour"){
            obj.value = new ColourDefinition(obj.value._red,obj.value._green,obj.value._blue)
        }

        return obj
    }

}