import React from 'react';
import { useState, useMemo } from 'react';
import '../src/styles/App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/Input/MyInput';
import MySelect from './components/UI/Select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'A', body: 'D' },
    { id: 2, title: 'C', body: 'B' },
    { id: 3, title: 'B', body: 'C' },
    { id: 4, title: 'D', body: 'A' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  //Posts Sorting Algorithm
  const sortedPosts = useMemo(() => {
    console.log('Working on memoized function!');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  //Posts Finding Algorithm
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((el) => el.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <MyInput
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
        placeholder="Search..."
      />

      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sorting by"
        options={[
          { value: 'title', name: 'By Title' },
          { value: 'body', name: 'By Content' },
        ]}
      />

      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts List" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>There aren't any posts</h2>
      )}
    </div>
  );
}

export default App;
