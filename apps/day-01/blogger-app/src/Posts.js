import React from 'react';

// const post = {
//   id: 1,
//   title: 'Introduction to React',
//   body: 'This post provides an introduction to React',
//   author: 'Hari',
//   category: 'react'
// };

// const Posts = () => {
//   return (
//     <div>
//       <h3>Posts</h3>
//       <div className="card">
//         <h5 className="card-header">{post.title}</h5>
//         <div className="card-body">
//           <p className="card-text">{post.body}</p>
//           <p className="card-text">Author: {post.author}</p>
//           <p className="card-text">Category: {post.category}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

class Posts extends React.Component {
  constructor() {
    super();

    // this.post = {
    //   id: 1,
    //   title: 'Introduction to React',
    //   body: 'This post provides an introduction to React',
    //   author: 'Hari',
    //   category: 'react'
    // };

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

  renderForm() {
    return (
      <div className="col-sm-4">
        <h3>Post Form</h3>
        <div className="card bg-light">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title"
                  placeholder="Enter title" />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" id="body" name="body" placeholder="Enter body"
                  rows="3" cols="30"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" name="author" placeholder="Enter author" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select required className="form-control" id="category" name="category">
                  <option value=""></option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderPost(post) {
    return (
      <div key={post.id} className="card bg-light mb-3">
        <h5 className="card-header">{post.title}</h5>
        <div className="card-body">
          <p className="card-text">{post.body}</p>
          <p className="card-text">Author: {post.author}</p>
          <p className="card-text">Category: {post.category}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
          <button className="btn btn-sm btn-outline-danger" type="button">Delete</button>
        </div>
      </div>
    );
  }

  renderPosts() {
    return (
      <div className="col-sm-8">
        <h3>Posts</h3>
        {this.state.posts.map(this.renderPost)}
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