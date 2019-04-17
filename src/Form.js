import React, { Component } from 'react';


class Form extends Component {

  constructor(){
  	super();
  	this.state = {
  		count: 0
  	}
  }	

  addOne() {
  	this.setState({
  		count : this.state.count + 1
  	})
  }

  removeOne() {
  	this.setState({
  		count : this.state.count - 1
  	})
  }

  render(){
    return(
    	<div>
       		<h1> Welcome {this.props.MaSuperVar} </h1>
       		<p>Test de la valeur {this.state.count}</p>
       		<button onClick={this.addOne.bind(this)}> Ajouter 1 </button>
       		<button onClick={this.removeOne.bind(this)}> Retirer 1 </button>
        </div>
    )
  }
}

export default Form;