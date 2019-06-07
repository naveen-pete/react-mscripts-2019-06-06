import React from 'react';

import PostForm from './PostForm';
import PostDetail from './PostDetail';
import { getPosts, addPost } from './api/posts';

class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

  }

  componentDidMount() {
    getPosts()
      .then((posts) => {
        this.setState({ posts: posts });
      })
      .catch((error) => {
        console.log('Get posts failed!');
        console.log('Error:', error);
      });
  }

  handleNewPost = (post) => {
    addPost(post)
      .then((newPost) => {
        this.setState((prevState) => {
          return { posts: [...prevState.posts, newPost] }
        });
      })
      .catch((error) => {
        console.log('Add post failed!');
        console.log('Error:', error);
      });
  }

  generateId(posts) {
    const newId = posts.length === 0 ? 1 : posts[posts.length - 1].id + 1;
    return newId;
  }

  renderPosts() {
    const filteredPosts = this.props.selectedCategory.code === 'all'
      ? this.state.posts
      : this.state.posts.filter((post) => {
        return post.category === this.props.selectedCategory.code
      });

    return (
      <div className="col-sm-7">
        <h4>Posts</h4>
        <h5>Category: {this.props.selectedCategory.name}</h5>
        {filteredPosts.map((post) => {
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
