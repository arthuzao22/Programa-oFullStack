import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState, useRef, useEffect } from 'react';

// const MenorQue10 = ({cliques}) => {
//   useEffect(() => {
//     console.log(`Iniciado ${cliques}`);

//     return (
//       () => console.log(`Finalizado: ${cliques}`)
//     );
//   }, []);

//   useEffect(() => {
//     console.log(`(Cada) Iniciado ${cliques}`);

//     return (
//       () => console.log(`(Cada) Finalizado: ${cliques}`)
//     );
//   }, [cliques]);

//   return <p>menor que 10...</p>;
// }

const App = () => {
  const cliques = useRef(0);
  const [atualizadoEm, setAtualizadoEm] = useState(Date.now());

  //const menor10 = cliques < 10 ? <MenorQue10 cliques={cliques} /> : null;
  return (
    <div>
      <h4>Clicou {cliques.current} vezes.</h4>
      {/* {menor10} */}

      <button onClick={() => { 
        cliques.current = cliques.current + 1 
        console.log(cliques.current);
        }}>Clique
      </button>

      <button onClick={() => { 
        setAtualizadoEm(Date.now());
        }}>Mostrar
      </button>
    </div>
  );
};

export default App;

/*
import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import { faker } from '@faker-js/faker';
import React, { useState, useEffect } from 'react';
import Spinner from './components/Spinner';

const App = (props) => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      console.log(`Carregando: ${carregando}`);
      setCarregando(false);
      setDados(objetos);
    }, 2000);
  },[]);
  
  if (carregando) {
    return <Spinner />;
  }

  return (<div className="ui feed">
      {
        dados.map(x => {
          return (<Evento 
            nome={x.nome} 
            likes={x.likes} 
            mensagem={x.mensagem} 
            fotoPerfil={x.fotoPerfil} 
            tempo={x.tempo} 
          />);
        })
      }
    </div>);
};

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
*/
