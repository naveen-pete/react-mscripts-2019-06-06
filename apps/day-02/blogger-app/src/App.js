import React, { Component } from 'react';

import Header from './Header';
import Categories from './Categories';
import Posts from './Posts';

class App extends Component {
  state = {
    categories: [
      { code: 'react', name: 'React' },
      { code: 'redux', name: 'Redux' },
      { code: 'angular', name: 'Angular' }
    ]
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <Categories categories={this.state.categories} />
          <Posts categories={this.state.categories} />
        </div>
      </div>
    );
  }
};

export default App;