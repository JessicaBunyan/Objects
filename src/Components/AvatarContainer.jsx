// @flow


import React from 'react';

type Props = {
    wiggle: any; 
};
type State = {
    
};

export class AvatarContainer extends React.Component<any, State>{
    

    render(){
        let speechBox = this.getTextBox();

        const canvasName = this.props.wiggle ? "canvas wiggle" : "canvas"

        return(
            <div className="avatar-region">
            <div className={canvasName}>
                {this.getImage()}

            </div>
            {speechBox}
            </div>
        )
    }

    getImage(): any{

        console.error("default getImage used for avatar container")

    }

    getTextBox(): any{
        console.error("default getTextBox used for avatar container")
    }

    
}
 