import { IVariableDefinition } from "../Interfaces/IVariableDefinition";


export class VariableStore {


    static vars: any;


    static varID = 0;
    static getVariableId(){
        Game.varID++;
        return Game.varID;
    }


    
    static getVar(id: number){

        return vars[""+id];



    }

    static registerVar(v: IVariableDefinition){

        const newId =  this.getVariableId();
        v.id = newId;

        vars[newId] = v;
    }

}