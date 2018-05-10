// @flow
import * as React from "react";
import PropTypes from "prop-types";


type Props = {
    onReturn: () => void,
    enabled: boolean,
    flash:  boolean,
    active: boolean
}

type State = {
    
}

export class GroundFooter extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
    }

    render() {
        let className = "back-button "
        className += this.props.enabled ? "" : "disabled "
        className += this.props.flash ? "flash " : "";

        let backButton = this.props.onReturn ? <div className={className}> </div> : "foo"
        return (
 
            <div className="ground-region" onClick={() => this.props.active ? this.props.onReturn() : console.log("fuckaduck")} >
            
                {backButton}
            </div>
        );
    }
}