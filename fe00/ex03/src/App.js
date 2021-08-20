import './App.css';
import ToDoList from './ToDoListTemplate';
import { createGlobalStyle } from 'styled-components';
import Input from './Input';
import ItemList from './ItemList';
import { useRef, useState } from 'react';

const GlobalStyle = createGlobalStyle`
	body {
		background: #e9ecef;
	}
`

function App() {
	const [input, setInput] = useState({
		todo: '',
		done: false
	})
	const { todo, done } = input;
	const nextId = useRef(4);

	const onChange = e => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value
		})
	}

	const [todos, setTodos] = useState([
		{
			id: 1,
			text: '리액트 공부하기',
			done: true
		},
		{
			id: 2,
			text: 'Node.js 공부하기',
			done: false
		},
		{
			id: 3,
			text: '리애 먹기',
			done: false
		}
	])

	const onCreate = () => {
		const newtodo = {
			id: nextId.current,
			todo,
			done
		};
		setTodos(todos.concat(newtodo));
		
		setInput({
			todo: '',
			done: false
		})
		nextId.current += 1;
	}

	const onRemove = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	} 

	const onToggle = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? {...todo, done: !todo.done} : todo	
			)
		);
	}

	return (
	<>
		<GlobalStyle />
		<ToDoList>
			<Input todo={todo} onChange={onChange} onCreate={onCreate} />
			<ItemList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
		</ToDoList>
	</>
  );
}

export default App;
