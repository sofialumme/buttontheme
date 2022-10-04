import React from 'react';
import { buttonThemes } from './App';

function HeaderButton() {

  return (
    <div>
      <button style={buttonThemes.black}>Press me</button>
    </div>
  );
}

export default HeaderButton;
