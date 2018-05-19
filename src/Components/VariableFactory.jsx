
import React from "react";
import { ColourVar } from "./ColourVar";
import { NumberVar } from "./NumberVar";
import { ColourDefinition } from "../Classes/ColourDefinition";
import { TestVar } from "./TestVar";


export  class VariableFactory {

    // buildNumber(key: number, id: number, value: number): React.Element<any>{
    //     var element = <NumberVar
    //     key={key} 
    //     id={id}
    //     type={"number"}
    //     value={value} />
    //     return element
    // }

    // buildColour(key: number, id: number, value:ColourDefinition): React.Element<any> {

    //     var c = <ColourVar
    //         key={key}
    //         id={id}
    //         type={"colour"}
    //         value={value}
    //         />
    //         return c;

    // }

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

    }

    reconstructVar(json: string){
        
        
        console.log("in reconstr");
        console.log(json);
        var obj = JSON.parse(json);
        console.log(obj);

        // const val = JSON.parse(obj.value);

                
        switch (obj.type){
            case "number":
                return new NumberVar(obj.value.value, obj.id);
            case "colour":
                return ColourVar.build(obj);
            case "test":
                // return this.buildTest(key, id, value);

        }


        if(obj.type === "colour"){
        }

    }

}