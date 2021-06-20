import React from 'react'
import ListPost from '../components/ListPosts'
import ListaCategoria from '../components/ListaCategorias'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
        <ListaCategoria/>

      </div> 
      <ListPost url={'/posts'}/>
    </main>
  )
}

export default Home
