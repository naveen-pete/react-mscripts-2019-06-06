import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCategory, getCategories } from './actions';

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const categories = [
      { code: 'all', name: 'All' },
      ...this.props.categories
    ];

    return (
      <div className="col-sm-3">
        <h4>Categories</h4>
        <ul className="list-group">
          {categories.map((category) => {
            return <li onClick={() => { this.props.selectCategory(category); }} key={category.code} className="list-group-item list-group-item-action">
              {category.name}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { selectCategory, getCategories })(Categories);
