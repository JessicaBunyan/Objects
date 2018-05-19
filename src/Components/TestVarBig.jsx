/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import { IVariableDefinition } from "../Interfaces/IVariableDefinition";
import { TestVar } from "../Classes/TestVar";
import { NumberVar } from "../Classes/NumberVar";
import { MemberVariable } from "./MemberVariable";
import { Game } from "./Game";

type Props = {
    var: TestVar;
    game: Game;
};

type State = {

};


export class TestVarBig extends React.Component<Props, State>{
    props: Props;
    state: State;
    defaultProps = {

    };
    constructor(props: Props){
        super(props);
        this.state= {
            answers: []
        }
    }

    getQuestions(){
        const val = this.props.var;
        const questions = [];
        for (let i = 0; i< this.props.var.questions.length; i++){

            const q = <div class="question-row">
                           <div class="question">{val.questions[i].question}</div>
                                <MemberVariable
                                    game    ={this.props.game}
                                    type={"number"}
                                    variable={val.currentAnswers[i]}
                                    updateState={(n: NumberVar) => this.props.var.storeAnswer(i, n)}
                                    />
                        </div>          

            questions.push(q);
        }

        return questions;


    }



    render(){
        const val = this.props.var;


        return (

            <div className="test-var-big"
                onClick={(event) => this.onClick(event)}>
                {this.getQuestions()}

            </div>
        )
    }

    onClick(event: any){
        console.log("clicked");
        event.stopPropagation();
        return false;
    }

}





