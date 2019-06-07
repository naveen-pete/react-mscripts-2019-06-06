import React from 'react';

const Categories = (props) => {
  return (
    <div className="col-sm-2">
      <h4>Categories</h4>
      <div className="list-group">
        {props.categories.map((category) => {
          return <a key={category.code} href="#" className="list-group-item list-group-item-action">
            {category.name}
          </a>
        })}
      </div>
    </div>
  );
};

export default Categories;
