import React from 'react';
import PostList from './components/list';
import PostForm from './components/form';

function App() {
    return (
        <div className="App">
            <h1>React-Redux Posts</h1>
            <PostForm />
            <PostList />
        </div>
    );
}

export default App;
