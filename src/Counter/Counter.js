import React, { Component } from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            numberOfCopines : 0
        }
    }

    addCopine(event){
        this.setState({
            numberOfCopines : this.state.numberOfCopines + 1
        })
        console.log(this.state.numberOfCopines)
    }

    removeCopine(event){
        if ( this.state.numberOfCopines >= 1){
            this.setState({
                numberOfCopines : this.state.numberOfCopines - 1
            })
        }
       
    }

    render(){
        return(
            <div>
                <p style={ {color : this.props.color, backgroundColor : this.props.bg} }>j'ai {this.state.numberOfCopines} copine</p>
                <button onClick={this.addCopine.bind(this)}>Ajouter une copine</button>
                <button onClick={this.removeCopine.bind(this)}>  Supprimer une copine</button>
            </div>
        )
    }
}

export default Counter;