import React, {Component} from "react"

class SingleProject extends Component{
	
	render(){
		let CompoSingle ;
		if(this.props.projects){
			CompoSingle = this.props.projects.map(project => {
			})
		}
		return(
			<div>
			{this.props.children}
			<li> {CompoSingle.title} </li>
			</div>
			)
	}

}

export default SingleProject;