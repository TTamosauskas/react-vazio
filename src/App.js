import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Routes from './routes';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
