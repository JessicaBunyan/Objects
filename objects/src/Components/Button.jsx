// @flow
import * as React from 'react';


type Props = {

	style?: string,
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
					onClick={(e: JQueryEventObject) => this.onClick(e)} >
					<span>
					{text}
					</span>		
					</div>
				);
	} 

	onClick(e: any){
		if (this.props.enabled){
			this.props.onClick(e);
		}
		
	}

	render(){
		console.log(this.props);
		return (
			<div className="button-holder" >
			{this.getButton(this.state.text)}
			</div>
		)
	}
}
