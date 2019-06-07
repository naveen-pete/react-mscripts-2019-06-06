const apiUrl = 'http://localhost:3001/posts';

export const getPosts = () => {
  return fetch(apiUrl).then((response) => {
    return response.json();
  });
};

export const addPost = (post) => {
  return fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  }).then((response) => {
    return response.json();
  });
};
