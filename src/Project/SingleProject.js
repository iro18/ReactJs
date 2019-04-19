import React, {Component} from "react"
import VerySingleProjet from "./VerySingleProjet"

class SingleProject extends Component{
constructor(){
	super()
}



render(){
	const incompleteTasks = this.props.projects.filter(task => task.complete === false);
	const CompleteTasks = this.props.projects.filter(task => task.complete === true);
	

	// console.log(this.props);
	return (
		<div>
			
			<h1> Incompleted Tasks </h1>
			{incompleteTasks.map(projet => {
				return (<VerySingleProjet 
				key={projet.id} 
				projet={projet} 
				editTask = {this.props.editTask} 
				deleteTask = {this.props.deleteTask}  />
				)
			}
			)}
			<h1> Complete Tasks </h1>
			{CompleteTasks.map(projet => {
				return <VerySingleProjet 
				 key={projet.id}
				 projet={projet} 
				 editTask = {this.props.editTask} 
				 deleteTask = {this.props.deleteTask}
				/>
			}
			)}
		</div>
	)
}

}

export default SingleProject;