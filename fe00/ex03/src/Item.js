import React, { Component } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import './Item.css';
import styled from 'styled-components';

const Delete = styled.div`
	font-size: 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	&:hover {
		color: red;
	}
	display: none;
`

const ItemBox = styled.div`
	height: 30px;
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
	align-content: center;
	&:hover {
		${Delete} {
			display: inherit;
		}
		background: #818181;
		opacity: 0.5;
		cursor: pointer;
	}
`
const Text = styled.div`
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.key,
			text: props.text,
			done: props.done,
			onRemove: props.onRemove,
			onToggle: props.onToggle
		}
	}

	onMouseOver(e) {
		
	}

	render() {
		return (
			<ItemBox onClick={() => this.state.onToggle(this.state.id)}>
				<Text>
					{this.props.done ? <MdDone style={{marginRight: '5px', color: 'green'}}/> : <></> }
					{this.props.text}
				</Text>
				<Delete onClick={() => this.state.onRemove(this.state.id)}>
					<MdDelete />
				</Delete>
			</ItemBox>
		);
	}
}

export default Item;