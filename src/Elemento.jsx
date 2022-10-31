
export const Elemento = ({elemento, listaElementos, setLista}) => {

  const removerElemento = () => {
    setLista(listaElementos.filter(elem => elem.id !== elemento.id))
  }

  return (
    <article>
      <p>ID: {elemento.id}</p>
    <label htmlFor="contenido">Contenido: </label>
      <p>{elemento.valor}</p>
      <button onClick={removerElemento}>Remover elemento</button>
    </article>
  )
}

