import React, { Component } from 'react';

import Header from './Header';
import Categories from './Categories';
import Posts from './Posts';

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
      <div className="container">
        <Header />
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
      </div>
    );
  }
};

export default App;