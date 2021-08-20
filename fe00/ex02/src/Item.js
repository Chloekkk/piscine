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
	flex-direction: column;
	justify-content: center;
`

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
			
		}
	}

	onMouseOver(e) {
		
	}

	render() {
		return (
			<ItemBox>
				<Text>{this.props.text}</Text>
				<Delete>
					<MdDelete />
				</Delete>
			</ItemBox>
		);
	}
}

export default Item;