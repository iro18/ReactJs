import React,{Component} from 'react'

class VerySingleProjet extends Component{
    constructor(){
        super();

    }

    render(){
        const projet = this.props.projet
        return <li><span onClick={this.props.deleteTask.bind(this, projet)}>❌</span>#{projet.id}  -  {projet.title} / {projet.category} {projet.complete ? <span onClick={this.props.editTask.bind(this, projet)}>✅</span> : <span onClick={this.props.editTask.bind(this, projet)}>✔</span> }</li>
    }
}

export default VerySingleProjet;