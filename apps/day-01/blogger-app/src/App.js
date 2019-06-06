import React from 'react';
import Header from './Header';
import Posts from './Posts';

// arrow function syntax
const App = () => {
  return (
    <div className="container">
      <Header />
      <Posts />
    </div>
  );
};

// normal function
// function App() {
//   return <h1>Hello, Welcome to React!</h1>
// }

// function expression
// const App = function () {
//   return <h1>Hello, Welcome to React!</h1>
// };

export default App;