import { IVariableDefinition } from "../Interfaces/IVariableDefinition";


export class VariableStore {


    static vars: any = {};


    static varID = 0;
    static getVariableId(){
        VariableStore.varID++;
        return VariableStore.varID;
    }


    
    static getVar(id: number){

        return VariableStore.vars[""+id];

    }

    static registerVar(v: IVariableDefinition){

        const newId =  this.getVariableId();
        v.id = newId;

        console.log(newId);
        VariableStore.vars[""+newId] = v;
    }

} 