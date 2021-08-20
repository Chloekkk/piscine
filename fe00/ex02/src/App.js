import './App.css';
import ToDoList from './ToDoListTemplate';
import { createGlobalStyle } from 'styled-components';
import Input from './Input';
import ItemList from './ItemList';

const GlobalStyle = createGlobalStyle`
	body {
		background: #e9ecef;
	}
`

function App() {
  return (
	<>
		<GlobalStyle />
		<ToDoList>
			<Input />
			<ItemList />
		</ToDoList>
	</>
  );
}

export default App;
