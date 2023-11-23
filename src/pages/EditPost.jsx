import React from 'react'
import {Container, PostCard} from '../Components'
import appwriteService from '../appwrite/conf'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PostForm from '../Components/post-form/PostForm'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug) {
            appwriteService.getPost(slug).then((post)=>{
                if(post)    {
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])
  
  
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null; 

}

export default EditPost