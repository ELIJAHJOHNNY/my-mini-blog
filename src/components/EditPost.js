import React, { useState } from 'react';
import axios from 'axios';

const EditPost = ({ id }) => {
    const [editPost, setEditPost] = useState('');

    const editMyPost = () => {
        const myEdit = {
            title: editPost,
        }

        if(editPost.length > 0){
            axios.patch(`http://localhost:3000/posts/${id}`, myEdit)
            .then(() => alert('You have succesfully edited your post'))
        }else{
            alert('Please enter the post to edit')
        }
        setEditPost('');

    }

  return (
    <>
        <input placeholder='Edit Post' value={editPost} onChange={(e) => setEditPost(e.target.value)} className = 'bg-black text-white' />
        <button id='Edit-button' onClick={() => editMyPost()} className = 'bg-black text-white border-2 px-[15px] py-[2px] ml-[10px] mt-[17px] rounded-md '>Edit Post</button>
    </>
  )
}

export default EditPost