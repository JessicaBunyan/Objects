import $ from 'jquery'; 
import {Button} from "./Button";

export class ConstructorButton extends Button{
	getButtonClassName() {
		return super.getButtonClassName() + " button-constructor";
	}

	buttonClicked(e){
		if (this.state.enabled === false){
			return;
		}

		const $button = $(e.currentTarget);
		$button.addClass("click").text("");
		this.setState({
			text: "",
			clicked: true
		});
		console.log("done");

	}
}