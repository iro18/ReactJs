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
			}
			]
		}
	}
	render(){
		return(
			<div>
			<h1> Salut </h1>
			<SingleProject projects={this.state.projects} />
			</div>
			)
	}

}

export default Projects;