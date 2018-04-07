/* @flow ********************************************************************************************************
TODO:


**********************************************************************************************************/

import * as React from "react";
import $ from 'jquery'; 
import _ from "underscore";
import {ObjectSceneProps, ObjectScene, ObjectSceneState} from "./ObjectScene";

type Props = {

};

interface PaintbrushState extends ObjectSceneState {

};


export class PaintbrushScene extends ObjectScene{
    props: ObjectSceneProps;
    state: PaintbrushState;
    defaultProps = {

    };
    constructor(props: ObjectSceneProps){
        super(props);
        // this.state= {

        // }
    }




}





