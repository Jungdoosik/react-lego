import React, { Component, useState } from 'react';

function MinutesToHour() {
  const [amount, setAmount] = React.useState();
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reSet = () => setAmount("");

  const onFlip = () => {
    reSet();
    setFlipped((current) => !current);
  }
  console.log(flipped);
  console.log(!flipped);
  return (
    <div>
      <div>
        <label htmlFor='minutes'>Minutes</label>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder='Minutes'
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <h4>You want to convert {amount}</h4>
      <div>
        <label htmlFor='hours'>Hours</label>
        <input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder='Hours'
          type="number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reSet}>Reset</button>
      <button onClick={onFlip}>{flipped ? 'minutes' : 'hours'}</button>
    </div>
  );

}
function KmToMiles() {
  return <h3>KM 2 M</h3>;
}
function App() {
  const [index, setIndex] = React.useState(0);
  const onSelect = (e) => {
    setIndex(e.target.value);
    console.log(index);
  };

  return (
    <div>
      <h1>Spuer Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Select Change Unit!!</option>
        <option value="1">Minutes & Hours</option>
        <option value="2">Km & Miles</option>
      </select>
      <hr></hr>
      {index === "0" ? "Please select your units" : null}
      {index === "1" ? <MinutesToHour /> : null}
      {index === "2" ? <KmToMiles /> : null}
    </div>
  );

}

export default App;
