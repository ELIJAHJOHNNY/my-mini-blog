import React from 'react';
import { v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import axios from 'axios';

  const Post = () => {
  const [post, setPost] = useState('');
  const postHandle = () => {
          if (post.length > 0) {
              const myPost =   {
                  "id": uuidv4(),
                  "title": post,
                  "author": "typicode"
                }
              axios.post('http://localhost:3000/posts', myPost).then(alert('Yay! New tweet'))
  
          } else alert ('Please enter a text to post');
          setPost('');
      }
    
  return (
      <div className = 'flex-col items-center justify-center text-center m-5'>
          <h2 className='font-perm mb-[30px] text-[30px] '>MY MINI BLOG</h2>
          <textarea className='font-sign' id='input' value={post} placeholder='Write to post on blog' onChange={(e) => setPost(e.target.value) }></textarea>
          <button id='post-button' onClick={() => postHandle()} className = 'rounded-md bg-black text-white border-2 px-[15px] py-[2px] ml-[10px] mt-[17px] absolute '>Post</button>
      </div>
    )
}

export default Post