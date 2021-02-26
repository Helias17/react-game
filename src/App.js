import React from 'react';
import Header from '@js/components/header/Header';
import Body from '@js/components/body/Body';
import Footer from '@js/components/footer/Footer';

const App = (props) => {
  return (
    <div className="app__box">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;