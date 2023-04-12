import styles from '../styles/home.module.css';
import {addPost} from '../api';
import React, { useState } from 'react'
import {toast} from 'react-toastify';
import { usePosts } from '../hooks';

export default function CreatePost() {
    const [post, setPost] = useState('');
    const [addingPost, setAddingPost] = useState(false);
    const posts = usePosts();
  
    const handleAddPostClick =async () => {
        setAddingPost(true);
        //do some Cheack

         const response = await addPost(post) 

         if(response.success){
            setPost('');
            posts.addPostToState(response.data.post);

            toast('Post Created Successfully',{
                apperrance : 'success'
            });

         }else{
            toast(response.message ,{
                apperrance : 'error'
            })

         }
          
        setAddingPost(false);
    };
  
    return (
      <div className={styles.createPost}>
        <textarea
          className={styles.addPost}
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
  
        <div>
          <button
            className={styles.addPostBtn}
            onClick={handleAddPostClick}
            disabled={addingPost}
          >
            {addingPost ? 'Adding post...' : 'Add post'}
          </button>
        </div>
      </div>
    )};