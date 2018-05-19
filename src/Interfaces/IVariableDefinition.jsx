export interface IVariableDefinition{
    id: number;
    type: VariableType;
    value: IVariableValueType;
    
        
    
    
    getClassName(): string;
    getValue(): string;
    
    getDataTransferObj(): any;

    onClick(ev: any): void;
    
}

export type IVariableValueType = string | ColourDefinition| TestDefinition;
