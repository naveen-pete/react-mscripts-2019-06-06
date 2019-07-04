import * as CategoriesApi from '../api/categories';
import * as PostsApi from '../api/posts';

// action creator
export const selectCategory = (category) => {
  return {
    type: 'CATEGORY_SELECTED',
    payload: category
  };
}

export const getCategories = () => {
  return (dispatch) => {
    CategoriesApi.getCategories()
      .then(categories => {
        dispatch({
          type: 'GET_CATEGORIES',
          payload: categories
        });
      })
      .catch(error => {
        console.log('Get categories failed.');
        console.log('Error:', error);
      });
  }
}

export const getPosts = () => {
  return dispatch => {
    PostsApi.getPosts()
      .then(posts => {
        dispatch({
          type: 'GET_POSTS',
          payload: posts
        });
      })
      .catch(error => {
        console.log('Get posts failed.');
        console.log('Error:', error);
      });
  }
};
