import React, { useState } from 'react';

const Userstate = () => {
  const [counter, setCounter] = useState(0);
  const [Inputvalue, setInputvalue] = useState('Test');

  const inctrement = () => {
    setCounter(counter + 1);
  }


  const onchange = (event) => {
    const newValue = event.target.value;
    setInputvalue(newValue);
  }

  return (
    <div>
      <button onClick={inctrement}>inctrement</button>{counter};

      <input type="text" placeholder="enter Something here " onChange={onchange}>
      </input>
      {Inputvalue}
    </div>

  );

};

export default Userstate;

