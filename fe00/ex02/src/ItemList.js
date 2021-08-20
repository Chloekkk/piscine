import React, { Component } from 'react';
import Item from './Item.js';

class ItemList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<Item text="리액트 공부"/>
				<Item text="Node.js 공부"/>
				<Item text="리애 먹기"/>
			</>
		);
	}
}

export default ItemList;