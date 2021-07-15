import React, { useState } from 'react';

const App = () => {
  const [isColorRed, setIsColorRed] = useState(true);
  const colorTheme = { color: 'white', backgroundColor: isColorRed ? 'red' : 'blue' };
  const buttonText = isColorRed ? 'blue' : 'red';

  return (
    <>
      <button type="button">Press me</button>
      <button onClick={() => setIsColorRed(!isColorRed)} type="button" style={colorTheme}>
        change to
        {' '}
        {buttonText}
      </button>
    </>
  );
};
export default App;
