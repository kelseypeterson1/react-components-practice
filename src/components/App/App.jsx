import logo from './logo.svg';
import './App.css';

import Title from '../Title/Title'
import Inputs from '../Inputs/Inputs'
import Table from '../Table/Table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Inputs />
        <Table />
      </header>
    </div>
  );
}

export default App;
