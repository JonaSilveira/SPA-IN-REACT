import React,{useState, useEffect} from 'react';
import { Link, Route, useParams, useRouteMatch, Switch } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListPost from './ListPosts'
import Subcategoria from '../paginas/Subcategoria'

const Categoria = () => {
    const {id} = useParams()
    const {url, path} = useRouteMatch()
    const [subCategorias, setSubCategorias] = useState([])

    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria)=>{
            console.log(categoria)
            setSubCategorias(categoria.subcategorias)
        })
    },[id])

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias/>
        <ul className="lista-categorias container flex"> 
            {
                subCategorias.map((subCategoria)=>( 
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subCategoria}>
                        <Link to={`${url}/${subCategoria}`}>
                            {subCategoria}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <Switch>
            <Route  exact path={`${path}/`}>
                <ListPost url={`/posts?categoria=${id}`}/>
            </Route>
            <Route path={`${path}/:subcategoria`}>
                <Subcategoria/>
            </Route>
        </Switch>
        
        </>
    )
}

export default Categoria