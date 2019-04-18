import React, {Component} from "react"
import SingleProject  from "./SingleProject"

class Projects extends Component{
	constructor(){
		super();
		this.state ={
			projects : [
			{
				id : "1",
				title : "Titre 1",
				category : "Mycat 1",
				complete : true
			},
			{
				id : "2",
				title : "Titre 2",
				category : "Mycat 2",
				complete : false
			},
			{
				id : "3",
				title : "Titre 3",
				category : "Mycat 3",
				complete : true
			}
			]
		}
	}
	render(){
		
		return(
			<div>
			<h1> List of all task </h1>
			<ul>
			<SingleProject projects={this.state.projects} />
			</ul>
			</div>
			)
	}

}

export default Projects;