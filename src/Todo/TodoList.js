import React, {Component} from 'react';

class TodoList extends Component{

		constructor(){
			super();
			this.state = {
				userInput : '',
				items : []
			};
		}
		onChange(event){
			this.setState({
				userInput: event.target.value
			})
		}

		addTodo(event){
			event.preventDefault();

			this.setState({
				items: [...this.state.items, this.state.userInput],
				userInput : ''
			})
		}

		delFromArray(item){
			        let array = this.state.items;
			        const index = array.indexOf(item);
			        array.splice(index, 1);
			        this.setState({
			            items: array
			        });
		}

		taskCompleted(item){
			let array = this.state.items;
			let index = array.indexOf(item);
			
		}	

		renderTodos(){
			return this.state.items.map((item) => {
				return (
					<div>
							<p onClick={this.taskCompleted.bind(this , item)}>V</p>  {item} | <button onClick= {this.delFromArray.bind(this,item)}>x</button>		
					</div>
				);
			});
		}

		render(){
			return(
					<div> 
							<h1>Ma TodoList </h1>
							<form>
								<input 
								onChange = {this.onChange.bind(this)}
								value={this.state.userInput} 
								type="text" 
								placeholder="Renseignez un element" />
								<button onClick={this.addTodo.bind(this)} >Envoyer</button>
							</form>
							<div>
							{this.renderTodos()}
							</div>
					 </div>
				)
		}
}

export default TodoList;