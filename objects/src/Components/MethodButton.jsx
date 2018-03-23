import {Button} from "./Button";

export class MethodButton extends Button{
	getButtonClassName() {
		return super.getButtonClassName() + " button-method";
	}


}