export interface IVariableDefinition{
    id: number;
    type: VariableType;
    value: IVariableValueType;
    game: Game;
    
        
    
    
    getClassName(): string;
    getValue(): string;
    
    onClick(ev: any): void;
    
}

export type IVariableValueType = string | ColourDefinition| TestDefinition;
