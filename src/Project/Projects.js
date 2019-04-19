import React, {Component} from "react"
import SingleProject  from "./SingleProject"

class Projects extends Component{
	constructor(){
		super();
		this.state ={
			projectDefinition : "",
			projects : [

			]
		}
	}


	editTask(taskId){
	// 1. Get all my projects + Index of my current project
	let projects = [...this.state.projects];
	let index = projects.indexOf(taskId);
	// 2. Copy to mutate
	let item = {...projects[index]};
	// 3. Replace my field
	item.complete = !item.complete;
	// 4. Mutate but in a copy
	projects[index] = item;
	// 5. Set the state to pass my projects
	this.setState({projects});
	}

	deleteTask(taskId){
			let array = this.state.projects;
			let index = array.indexOf(taskId)
			array.splice(index,1)
			this.setState({
				projects : array
			})
		}

	HandleChange(e){
		this.setState({projectDefinition : e.target.value})
	}
	SubmitProjet(e){
		e.preventDefault()
		this.setState({ projectDefinition : ""})
		return this.setState({ projects : [...this.state.projects, {
			id : this.state.projects.length + 1,
			title : this.state.projectDefinition,
			category : "Super Category",
			complete : false
			}] 
		})
	}

	render(){
		return(			
			<div>
			<h1> List of tasks </h1>
			<ul>
			<SingleProject 
				projects={this.state.projects} 
				editTask={this.editTask.bind(this)} 
				deleteTask={this.deleteTask.bind(this)} />
			</ul>
				<form onSubmit={this.SubmitProjet.bind(this)}>
					<input type="text" onChange={this.HandleChange.bind(this)} value={this.state.projectDefinition} placeholder="Enter a value" />
					<input type="submit" />
				</form>

			</div>
			)
	}

}

export default Projects;