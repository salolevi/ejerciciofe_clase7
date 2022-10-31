import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Elemento} from './Elemento';
import { Form } from './Form';

function App() {
  const [listaElementos, setLista] = useState([]);

  const style = {
    display: 'flex',
    gap: '2em',
    'margin-bottom': '1.5em'
  }
  return (
    <div className="App">
      <div className="elementos" style={style}>
        {listaElementos.map((elem, index) => <Elemento key={index} listaElementos={listaElementos} setLista={setLista} elemento={elem}/>)}
      </div>
     <Form listaElementos={listaElementos} setLista={setLista}/>
    </div>
  )
}

export default App
