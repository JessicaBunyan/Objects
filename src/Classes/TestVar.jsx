/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { Variable, VarProps } from "../Components/Variable";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import test from "../img/Test.png";
import { VariableStore } from "../Classes/VariableStore";
import { Game } from "../Components/Game";
import { TestVarBig } from "../Components/TestVarBig";
import { NumberVar } from "./NumberVar";

export type questionDef = {
    question: string,
    answer: number;
}



export class TestVar implements IVariableDefinition{

    questions: questionDef[];
    game: Game;
    currentAnswers: NumberVar[] = [];
    type = "test"

    constructor(testDef?: questionDef[]){
        if (testDef){
            this.questions = testDef;
        } else {
            this.questions = this.getRandomQuestions();
        }
        VariableStore.registerVar(this);

    }

    getRandomQuestions(){
        const qs = [];
        for(let i=0; i <3; i++){
            const n1 = randNum(0,4);
            const n2 = randNum(0,5);

            const q = this.makeQuestion(n1, n2)
            qs.push(q)
        }
        return qs;
    }

    makeQuestion(n1: number, n2: number){
        return {
            question: `${n1} + ${n2}`,
            answer: n1 + n2
        };
    }

    areAnswersCorrect(): boolean{
        console.log("in check answer");
        let correct = true;
        this.questions.forEach((q, index) => {  
            if (!this.currentAnswers[index] || q.answer !== this.currentAnswers[index].getValue()){
                correct = false;
            }
        });

        return correct;
    }

    toString(): string{
        return ``
    }

    getClassName(){
        return "inventory-item test"
    }

    getValue(){
        return "test";       

    }

    getImage(){
        return <img src={test} />
    }

    onClick(){ 
        console.log("woo");

        const jsx = <TestVarBig game={this.game} var={this} />

        this.game.putItemInFrame(jsx);
    }

    storeAnswer(index: number, val: NumberVar){
        if (this.currentAnswers[index]){
            return;
        }
        this.currentAnswers[index] = val;
    }

}


function randNum(min, max){
    return Math.floor(min + (Math.random() * max));
}
