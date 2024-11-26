import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../actions/actions';

const PostList=()=>{
    const posts=useSelector((state)=>state.posts.posts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchData());
    },[dispatch]);

    return(
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;