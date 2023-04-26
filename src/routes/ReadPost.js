import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import blogFetch from '../axios/config'
import "./Home.css"

const ReadPost = () => {
  const { postId } = useParams()
  const [post, setPost] = useState({})

    const getPost = async (postId) => {
        try {
            const response = await blogFetch.get(`/posts/${postId}`)
            const data = response.data
            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost(postId)
    }, [postId])

  return (
    <div className='home'>
        {post.length === 0 ? <p>Carregando...</p> : (
            <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body} {post.body} {post.body} {post.body} {post.body} </p>
            </div>
        )}
    </div>
  )
}

export default ReadPost
