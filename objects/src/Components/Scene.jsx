import React from 'react';
import {ConstructorPillar} from "./ConstructorPillar";

export class Scene extends React.Component{
	render(){
		return (
			<div className="scene s01">

			    <ConstructorPillar bottom={100} />
			    <div className="avatar-container">
			    </div>

			      
			  </div> 
			);
	}
} 