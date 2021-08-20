import React, { Component } from 'react';
import Item from './Item.js';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todos,
			onRemove: props.onRemove,
			onToggle: props.onToggle
		}
	}
	render() {
		return (
			<>
				{this.state.todos.map(
					(todo) => <Item key={todo.id} text={todo.text} done={todo.done} onRemove={this.state.onRemove} onToggle={this.state.onToggle}/>
				)}
			</>
		);
	}
}

export default ItemList;