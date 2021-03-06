import React from 'react';
import { connect } from 'react-redux';

import PostDetail from './PostDetail';
import { addPost, deletePost } from './api/posts';
import { getPosts } from './actions';

class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

  }

  componentDidMount() {
    this.props.getPosts();
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

  handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        this.setState((prevState) => {
          const filteredPosts = prevState.posts.filter((post) => {
            return post.id !== id;
          });

          return { posts: filteredPosts };
        });
      })
      .catch((error) => {
        console.log('Delete post failed!');
        console.log('Error:', error);
      });
  }

  renderPosts() {
    // const filteredPosts = this.props.selectedCategory.code === 'all'
    //   ? this.state.posts
    //   : this.state.posts.filter((post) => {
    //     return post.category === this.props.selectedCategory.code
    //   });

    const filteredPosts = this.props.selectedCategory.code === 'all'
      ? this.props.posts
      : this.props.posts.filter((post) => {
        return post.category === this.props.selectedCategory.code
      });
    return (
      <div className="col-sm-9">
        <h4>Posts</h4>
        <h5>Category: {this.props.selectedCategory.name}</h5>
        {filteredPosts.map((post) => {
          return <PostDetail key={post.id} post={post} onDelete={this.handleDelete} />
        })}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderPosts()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts,
    selectedCategory: state.selectedCategory
  };
}

export default connect(mapStateToProps, { getPosts })(Posts);
