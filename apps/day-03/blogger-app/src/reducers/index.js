import { combineReducers } from 'redux';

const defaultCategory = { code: 'all', name: 'All' };
const defaultCategories = [];

// action
// {
//   type: 'CATEGORY_SELECTED',
//   payload: { code: 'react', name: 'React' }
// }
const selectedCategoryReducer = (state = defaultCategory, action) => {
  if (action.type === 'CATEGORY_SELECTED') {
    let newState = { ...action.payload };
    return newState;
  }

  return state;
};

const categoriesReducer = (state = defaultCategories, action) => {
  if (action.type === 'GET_CATEGORIES') {
    return action.payload;
  }

  return state;
};

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;

    case 'CREATE_POST':
      return [...state, action.payload];

    default:
      return state;
  }
};

const appReducers = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer
});

export default appReducers;
