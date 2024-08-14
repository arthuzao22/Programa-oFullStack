import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import { faker } from '@faker-js/faker';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [], carregado: false };
  }

  render() {
    if (!this.state.carregado) {
      this.setState({ feeds: objetos, carregado: true });
      return (<div>Carregando...</div>);
    }

    return (
      <div className="ui feed">
        {
          this.state.feeds.map(x => {
            return (<Evento 
              nome={x.nome} 
              likes={x.likes} 
              mensagem={x.mensagem} 
              fotoPerfil={x.fotoPerfil} 
              tempo={x.tempo} 
            />);
          })
        }
      </div>
    );
  }
}

const objetos = [
  { 
    nome: faker.person.firstName(), 
    likes: faker.number.int({min: 0, max: 50}), 
    mensagem: faker.lorem.sentence(), 
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
  { 
    nome: faker.person.firstName(), 
    likes: faker.number.int({min: 0, max: 50}), 
    mensagem: faker.lorem.sentence(), 
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
  { 
    nome: faker.person.firstName(), 
    likes: faker.number.int({min: 0, max: 50}), 
    mensagem: faker.lorem.sentence(), 
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
  { 
    nome: faker.person.firstName(), 
    likes: faker.number.int({min: 0, max: 50}), 
    mensagem: faker.lorem.sentence(), 
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  },
  { 
    nome: faker.person.firstName(), 
    likes: faker.number.int({min: 0, max: 50}), 
    mensagem: faker.lorem.sentence(), 
    fotoPerfil: faker.image.avatar(),
    tempo: faker.number.int({min: 0, max: 50})
  }
];

export default App;
