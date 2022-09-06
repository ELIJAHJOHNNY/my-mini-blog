import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditPost from './EditPost';

const DisplayPost = () => {
  const [getPost, setGetPost] = useState([]);

    function getAllPosts(){
        axios.get('http://localhost:3000/posts')
        .then((response) => {
            setGetPost(response.data)
        })
    }

    useEffect(() => {
        getAllPosts()
    }, [getPost])

  return (
    <div className = 'flex-col items-center justify-center text-center py-6 border-4 border-x-black  ml-4 mr-4 rounded-xl'>
        <h2 className='font-sign'>POSTS</h2>
        <div>
            {
                getPost.map((item) =>(
                    <ul key={item.id} className = 'mt-[20px] font-sign'>
                        <p id='display'>{item.title}</p>
                        <EditPost id= {item.id}/>
                    </ul>
                ))
            }
        </div>
    </div>
  )
}

export default DisplayPost