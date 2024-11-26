import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addPost} from '../actions/actions';

const PostForm=()=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title || !body){
            alert('Please enter title and body');
            return;
        }
        const newPost={
            title,
            body
        }
        dispatch(addPost(newPost));
        // Clear the form fields
        setTitle('');
        setBody('');
    }

    return (
        <div>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default PostForm;

