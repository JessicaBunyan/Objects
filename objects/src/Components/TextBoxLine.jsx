import React from "react";

export class TextBoxLine extends React.Component {
    constructor(props){
        super(props);
        this.state={
            // firstTime: true, // for triggering animations on render
            
        }

    }
    getClassName(){

    }
    
    render(){

        const delay = (this.props.index * 2.8) + "s";
        const styles = {
            // animationDelay: delay,
            // transitionDelay : delay,
        }
        const className = "text ";// + (this.state.firstTime ? "" : "show");
        return (

            <div 
            className={className} 
            style={styles}>
                    
                    {this.props.text}
        </div>
        )
        // this.setState({this.state.firstTime})
    }

    // componentDidMount(){
    //     if (this.state.firstTime){
    //         this.setState({firstTime: false});
    //     }
    // }

}