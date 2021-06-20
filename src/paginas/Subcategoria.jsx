import React from 'react';
import { useParams } from 'react-router-dom';
import ListPost from '../components/ListPosts';

const SubCategoria = () => {
    const {subcategoria} = useParams()
    return(
        <ListPost url={`/posts?subcategoria=${subcategoria}`}/>
    )
}

export default SubCategoria