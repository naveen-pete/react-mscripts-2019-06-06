
// action creator
export const selectCategory = (category) => {
  return {
    type: 'CATEGORY_SELECTED',
    payload: category
  };
}

export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES'
  }
}

