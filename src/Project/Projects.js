import React, {Component} from "react"
import SingleProject  from "./SingleProject"

class Projects extends Component{
	constructor(){
		super();
		this.state ={
			projectDefinition : "",
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
	update(id, task){
		let todoItem = this.items[id];
        todoItem.task = task;
        this.save();
	}
	editTask(taskId, task){
	//	todos.update(taskId, task);
	this.state.projects.map(singleProjet => {
		if (singleProjet === taskId){
			this.setState({
				complete : true
			})
			console.log(singleProjet)
		}}
	)
	/*let array = this.state.projects;
		let index = array.indexOf(taskId)
		array.splice(index,1)
		this.setState({
			projects : array
		})*/
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
				<form onSubmit={this.SubmitProjet.bind(this)}>
					<input type="text" onChange={this.HandleChange.bind(this)} value={this.state.projectDefinition} placeholder="Enter a value" />
					<input type="submit" />
				</form>
			<h1> List of tasks </h1>
			<ul>
			<SingleProject projects={this.state.projects} editTask={this.editTask.bind(this)} />
			</ul>
			</div>
			)
	}

}

export default Projects;