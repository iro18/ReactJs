import React, {Component} from "react"
import SingleProject  from "./SingleProject"

class Projects extends Component{
	constructor(){
		super();
		this.state ={
			projects : [
			{
				title : "Titre 1",
				category : "Mycat 1"
			},
			{
				title : "Titre 2",
				category : "Mycat 2"
			},
			{
				title : "Titre 3",
				category : "Mycat 3"
			}
			]
		}
	}
	render(){
		return(
			<div>
			<h1> List of all task </h1>
			<SingleProject projects={this.state.projects} />
			</div>
			)
	}

}

export default Projects;