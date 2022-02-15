import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header'
import Inputs from '../Inputs/Inputs'
import Table from '../Table/Table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Inputs />
        <Table />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
