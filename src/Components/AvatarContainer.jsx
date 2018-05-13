// @flow


import React from 'react';

// type Props = {

// };
type State = {
    
};

export class AvatarContainer extends React.Component<any, State>{
    

    render(){
        let speechBox = this.getTextBox();


        return(
            <div className="avatar-region">
            <div className="canvas">
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
 