import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import { faker } from '@faker-js/faker';


function App() {
  return (
    <div className="ui feed">
      <Evento/>
      <Evento/>
      <Evento/>
      <Evento/>
      <Evento/>
      <Evento/>
    </div>
  );
}

export default App;
