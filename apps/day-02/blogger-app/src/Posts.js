import React from 'react';

import PostForm from './PostForm';
import PostDetail from './PostDetail';

class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [
        {
          id: 1,
          title: 'Introduction to React',
          body: 'This post provides an introduction to React',
          author: 'Hari',
          category: 'react'
        },
        {
          id: 2,
          title: 'Advanced React',
          body: 'This post discusses about advanced features of React',
          author: 'Ram',
          category: 'react'
        },
        {
          id: 3,
          title: 'Introduction to Redux',
          body: 'This post provides an introduction to Redux',
          author: 'Shiv',
          category: 'redux'
        }
      ]
    };

  }

  handleNewPost = (newPost) => {
    this.setState((prevState) => {
      newPost.id = this.generateId(prevState.posts);
      return { posts: [...prevState.posts, newPost] };
    });
  }

  generateId(posts) {
    const newId = posts.length === 0 ? 1 : posts[posts.length - 1].id + 1;
    return newId;
  }

  renderPosts() {
    return (
      <div className="col-sm-7">
        <h4>Posts</h4>
        {this.state.posts.map((post) => {
          return <PostDetail key={post.id} post={post} />
        })}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderPosts()}
        <PostForm categories={this.props.categories} onNewPost={this.handleNewPost} />
      </React.Fragment>
    );
  }
}

export default Posts;
