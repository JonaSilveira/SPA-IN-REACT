import React from 'react'
import ListPost from '../components/ListPosts'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div> 
      <ListPost url={'/posts'}/>
    </main>
  )
}

export default Home
