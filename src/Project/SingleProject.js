import React, {Component} from "react"

class SingleProject extends Component{
	
	render(){
		let CompoSingle ;
		if(this.props.projects){
			CompoSingle = this.props.projects.map(function(project){
				return <li>{project.title} | {project.category}</li>
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