import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
function Btn({ text, fontSize }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: fontSize,
      }}>
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      <Btn text="Save Changes" fontSize={30} />
      <Btn text={"Continue"} />
    </div>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
}

export default App;
