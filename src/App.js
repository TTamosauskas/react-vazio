import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Routes from './routes';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
