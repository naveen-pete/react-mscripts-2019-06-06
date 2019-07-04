import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Categories from './Categories';
import Posts from './Posts';
import PostForm from './PostForm';

import { getCategories } from './api/categories';

class App extends Component {
  state = {
    categories: [],
    selectedCategory: { code: 'all', name: 'All' }
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({ categories: categories });
      })
      .catch((error) => {
        console.log('Get categories failed!');
        console.log('Error:', error);
      });
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />

          <Route path="/posts/form" render={(props) => {
            return <PostForm {...props} categories={this.state.categories} />
          }} />
          <Route path="/posts" exact render={() => {
            return (
              <div className="row">
                <Categories
                  categories={this.state.categories}
                  onCategorySelect={this.handleCategorySelect}
                />
                <Posts
                  categories={this.state.categories}
                  selectedCategory={this.state.selectedCategory}
                />
              </div>
            );
          }} />
          <Route path="/" exact component={Home} />

        </div>
      </BrowserRouter>
    );
  }
};

export default App;