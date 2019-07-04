import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h2>Blogger App Home</h2>
      <button className="btn btn-success mr-2" onClick={() => { props.history.push('/posts'); }}>Go to Posts</button>
      <button className="btn btn-info" onClick={() => { props.history.push('/postform'); }}>Go to Post form</button>
    </div>
  );
};

export default Home;