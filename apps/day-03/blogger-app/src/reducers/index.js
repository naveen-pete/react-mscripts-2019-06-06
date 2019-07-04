import { combineReducers } from 'redux';

const defaultCategory = { code: 'all', name: 'All' };
const defaultCategories = [];
const categories = [
  { code: 'react', name: 'React' },
  { code: 'redux', name: 'Redux' }
];

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
    // return action.payload;
    return categories;
  }

  return state;
};

const appReducers = combineReducers({
  // posts: [],
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer
});

export default appReducers;
