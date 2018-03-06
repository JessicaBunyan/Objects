

import React from "react";
import _ from "underscore";

export class Line extends React.Component{
    constructor(props){
        super(props);

    }

    getText(){
        return `<span class="text"> ${l} </span>`;
    }

}