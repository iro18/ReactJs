import React,{Component} from 'react'

class VerySingleProjet extends Component{
    constructor(){
        super();
        this.changeComplete = this.changeComplete.bind(this)
    }
    changeComplete(projet){
        return <li>
        {console.log(this.props) }
        {console.log(projet)}
        </li>
    }

    render(){
        const projet = this.props.projet
        return <li>#{projet.id}  -  {projet.title} / {projet.category} {projet.complete ? '✅' : <span onClick={this.changeComplete.bind(this, projet)}>❌</span>}</li>
    }
}

export default VerySingleProjet;