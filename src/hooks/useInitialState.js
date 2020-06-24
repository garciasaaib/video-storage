import { useState, useEffect } from 'react'

//manejo de estado y ciclo de vida de componentes
const useInitialState = (API) => {
  //useState es una funcion para inicializar mis datos antes de mandarlos
  //videos seria la variables y setVideos seria el metodo
  //lo que se pone entre parentesis en useState es el estado inicial de videos
  const [ videos, setVideos ] = useState({
    'mylist' :    [],
    'trends':     [],
    'originals':  []
  })

  //El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.
  //aqui lo que hace useEffect empezar cuando el objeto es montado y despues intervenir cuando ya tiene la data
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])
  return videos
}

export default useInitialState