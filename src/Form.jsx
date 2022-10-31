export const Form = ({listaElementos, setLista}) => {
  console.log(listaElementos);
  console.log(setLista);
  const addElement = () => {
    const input = document.querySelector('input');
    const nuevoElemento = {
      id: listaElementos.length + 1,
      valor: input.value
    }
    if (input.value.length > 0) setLista([...listaElementos, nuevoElemento]);
  }

  return <>
  <input type="text" />
  <button onClick={addElement}>Agregar elemento</button>
  </>
}