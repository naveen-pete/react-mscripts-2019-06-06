import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    id: 0,
    title: '',
    body: '',
    author: '',
    category: ''
  }

  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.setState({ [fieldName]: fieldValue });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onNewPost(this.state);
    this.setState({
      id: 0,
      title: '',
      body: '',
      author: '',
      category: ''
    });
  }

  renderCategories() {
    return this.props.categories.map((category) => {
      return <option key={category.code} value={category.code}>{category.name}</option>;
    });
  }

  render() {
    return (
      <div className="col-sm-3">
        <h4>Post Form</h4>
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title"
                  placeholder="Enter title" value={this.state.title} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" id="body" name="body" placeholder="Enter body"
                  rows="3" cols="30" value={this.state.body} onChange={this.handleChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" name="author" placeholder="Enter author" value={this.state.author} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select required className="form-control" id="category" name="category" value={this.state.category} onChange={this.handleChange}>
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
}

export default PostForm;