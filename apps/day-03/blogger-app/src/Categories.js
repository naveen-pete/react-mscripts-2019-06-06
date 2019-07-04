import React, { Component } from 'react';

class Categories extends Component {
  render() {
    const categories = [
      { code: 'all', name: 'All' },
      ...this.props.categories
    ];

    return (
      <div className="col-sm-2">
        <h4>Categories</h4>
        <ul className="list-group">
          {categories.map((category) => {
            return <li onClick={() => { this.props.onCategorySelect(category); }} key={category.code} className="list-group-item list-group-item-action">
              {category.name}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Categories;
