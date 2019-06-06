import React from 'react';

import PostDetail from './PostDetail';

class Posts extends React.Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      post: {
        id: 0,
        title: '',
        body: '',
        author: '',
        category: ''
      },
      categories: [
        { code: 'react', name: 'React' },
        { code: 'redux', name: 'Redux' },
        { code: 'angular', name: 'Angular' }
      ],
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

  renderCategories() {
    return this.state.categories.map((category) => {
      return <option key={category.code} value={category.code}>{category.name}</option>;
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log('this:', this);
    console.log('Form submitted:', this.state.post);
    // this.setState({ posts: [...this.state.posts, this.state.post] });

    this.setState((prevState) => {
      const id = prevState.posts.length === 0 ? 1 : prevState.posts[prevState.posts.length - 1].id + 1;
      const post = { ...this.state.post, id: id };

      return { posts: [post, ...prevState.posts] };

    });
  }

  handleTitleChange = (e) => {
    console.log('title:', e.target.value);
    // this.state.post.title = e.target.value;
    const post = this.state.post;
    this.setState({ post: { ...post, title: e.target.value } });
  }

  handleBodyChange = (e) => {
    console.log('body:', e.target.value);
    // this.state.post.title = e.target.value;
    const post = this.state.post;
    this.setState({ post: { ...post, body: e.target.value } });
  }

  handleAuthorChange = (e) => {
    console.log('author:', e.target.value);
    // this.state.post.title = e.target.value;
    const post = this.state.post;
    this.setState({ post: { ...post, author: e.target.value } });
  }

  handleCategoryChange = (e) => {
    console.log('category:', e.target.value);
    // this.state.post.title = e.target.value;
    const post = this.state.post;
    this.setState({ post: { ...post, category: e.target.value } });
  }

  renderForm() {
    return (
      <div className="col-sm-4">
        <h3>Post Form</h3>
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title"
                  placeholder="Enter title" value={this.state.post.title} onChange={this.handleTitleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" id="body" name="body" placeholder="Enter body"
                  rows="3" cols="30" value={this.state.post.body} onChange={this.handleBodyChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" name="author" placeholder="Enter author" value={this.state.post.author} onChange={this.handleAuthorChange} />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select required className="form-control" id="category" name="category" value={this.state.post.category} onChange={this.handleCategoryChange}>
                  <option value=""></option>
                  {this.renderCategories()}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // renderPost(post) {
  //   return (
  //     <div key={post.id} className="card bg-light mb-3">
  //       <h5 className="card-header">{post.title}</h5>
  //       <div className="card-body">
  //         <p className="card-text">{post.body}</p>
  //         <p className="card-text">Author: {post.author}</p>
  //         <p className="card-text">Category: {post.category}</p>
  //       </div>
  //       <div className="card-footer">
  //         <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
  //         <button className="btn btn-sm btn-outline-danger" type="button">Delete</button>
  //       </div>
  //     </div>
  //   );
  // }

  renderPosts() {
    return (
      <div className="col-sm-8">
        <h3>Posts</h3>
        {this.state.posts.map((post) => {
          return <PostDetail key={post.id} post={post} />
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {this.renderForm()}
        {this.renderPosts()}
      </div>
    );
  }
}

export default Posts;

// <div id='name' style="" className="row"></div>
// <PostDetail key="0" title={post.title} author={post.author} post={post} />