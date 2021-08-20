import React, { Component } from 'react';
import styled from 'styled-components';
import './Input.css';

const InputBox = styled.input`
	padding: 12px;
	border-radius: 4px;
	border: 1px solid #dee2e6;
	width: 78%;
	outline: none;
	font-size: 18px;
	box-sizing: border-box;
`
const AddButton = styled.button`
	border: none;
	background: #38d9a9;
	color: white;
	width: 20%;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 500;
	&:hover {
		background: #63e6be;	
	}
	&:active {
		background: #20c997;
	}
`

class Input extends Component {
	render() {
		return (
			<div className="input">
				<InputBox />
				<AddButton>ADD</AddButton>
			</div>
		);
	}
}

export default Input;