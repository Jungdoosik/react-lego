import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('aaaaaa');
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}


export default App;
