import React from 'react';
import Header from './components/header';
import CarCard from './components/car-card';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="app__main">
        <CarCard/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
