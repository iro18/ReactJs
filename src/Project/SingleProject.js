import React, {Component} from "react"

class SingleProject extends Component{
	
	render(){
		let CompoSingle ;
		if(this.props.projects){
			CompoSingle = this.props.projects.map(function(project){
				return <li key={project.id}>#{project.id} {project.title} | {project.category} - { project.complete ? ' ✅ ' : ' ❌ '}</li>
			})
		}
		
		return(
			<ul>
			 {CompoSingle}  
			 </ul>	
			)
	}

}

export default SingleProject;