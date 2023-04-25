import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import blogFetch from '../axios/config'
import "./NewPost.css"

const NewPost = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    // (e) evento
    // e.preventDefault impede recarregamento da página ao postar
    //https://jsonplaceholder.typicode.com/guide/ para ver o tutorial de "envio"

    const createPost = async(e) => {
        e.preventDefault()

        const post = {title, body, userId:1}

        await blogFetch.post("/posts", {
            body: post,
        })

        navigate("/")
    }

    return (
        <div className='new-post'>
            <h2>Inserir novo Post:</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className='form-control'>
                    <label htmlFor="title">Título:</label>
                    <input 
                        type='text' 
                        name="title" 
                        id="title" 
                        placeholder="Digite o título"
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div className='form-control'>
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea 
                        name="body" 
                        id="body"  
                        placeholder="Digite o Conteúdo"
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Criar Post" className='btn'></input>
            </form>
        </div>
    )
    }

export default NewPost