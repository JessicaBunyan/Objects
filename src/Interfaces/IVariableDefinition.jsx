export interface IVariableDefinition{
    id: number;
    type: VariableType;
    value: IVariableValueType;
    
        
    
    
    getClassName(): string;
    getValue(): string;
    
    getDataTransferObj(): any;

    onClick(ev: any): void;
    
    drag(ev: any, id: number, type: VariableType, value: string): void;
}

export type IVariableValueType = string | ColourDefinition| TestDefinition;
