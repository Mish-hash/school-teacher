import React from 'react';
import styles from './App.module.sass';

import HeaderBar from './components/HeaderBar/HeaderBar';
import FooterBar from './components/FooterBar/FooterBar';
import MainContainer from './components/MainContainer/MainContainer';


function App() {
  return (
    <div className={styles.container}>
      <HeaderBar/>
      <MainContainer/>
      <FooterBar/>
    </div>
  );
}

export default App;
