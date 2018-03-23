// @flow
import * as React from 'react';


type Props = {

	style: string,
	clicked: boolean,
	enabled: boolean,
	onClick: (any) => void,

};

type State = {
	text: string
};
export class Button extends React.Component<Props, State>{
	baseClassName: string = "button";
	constructor(props: Props){
		super(props);
		this.state = {
			text: "New",
		};
	}

	getButtonClassName(): string{
		const clicked: string = this.props.clicked ? " clicked" : "";
		const enabled: string = this.props.enabled ? "" : " disabled";
		return this.baseClassName + clicked + enabled;
	}

	getButton(text: string){
		return (<div className={this.getButtonClassName()} 
					onClick={(e: JQueryEventObject) => this.props.onClick(e)} >
					<span>
					{text}
					</span>		
					</div>
				);
	}

	render(){
		console.log(this.props);
		return (
			<div className="button-holder" style={this.props.style}>
			{this.getButton(this.state.text)}
			</div>
		)
	}
}
