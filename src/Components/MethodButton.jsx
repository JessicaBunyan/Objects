// @flow
import {Button} from "./Button";


export class MethodButton extends Button{
	getButtonClassName() {
		return super.getButtonClassName() + " button-method";
	}

	// getButton(){
	// 	return (
	getText(){
		return this.props.text ? this.props.text : "Execute"
	}



	// 	);
	// }

}