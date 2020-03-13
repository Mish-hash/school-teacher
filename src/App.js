import React from 'react';
import styles from './App.module.sass';

import HeaderBar from './components/HeaderBar/HeaderBar';


function App() {
  return (
    <div className={styles.container}>
      <HeaderBar/>
    </div>
  );
}

export default App;
