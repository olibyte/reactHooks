import './App.css';
import React, { useState, useEffect } from 'react';
  const getPost = () => fetch(`https://jsonplaceholder.typicode.com/posts/4`).then(response => response.json()); 

function App() {
  //post is the current state, updatePosts is the function that update the value of the first variable, which is our current state
  const [post, updatePosts] = useState(null);
//fetches data and updates the state which causes a re-render, component renders again and useEffect is called once more. Cycle continues
  useEffect(() => {
      (async () => {//need to place sync functions inside body of useEffect - effect mustn't return anything else besides function. By making the function async, it will return a Promise
          updatePosts(await getPost());
      })();
  }, []);

  if (!post) {
      return <div>Loading...</div>
  }

  return (
      <div className="App">
          <header className="App-header">

              <h2>{post.title}</h2>
          </header>
          <main>{post.body}</main>
          
      </div>
  );
}

export default App;
