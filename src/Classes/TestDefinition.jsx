

export type questionDef = {
    question: string,
    answer: number
}


export class TestDefinition {
    
    questions: questionDef[];

    constructor(testDef: questionDef[]){
        this.questions = testDef;
        // const questions: string: number;
        // questions["5 + 12"] = 17;



    }

    toString(): string{
        return ``
    }


}