import {Button} from "./Button";

export class ConstructorButton extends Button{
	getButtonClassName() {
		return super.getButtonClassName() + " button-constructor";
	}


}