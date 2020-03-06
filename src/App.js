import React from 'react';
import { StyledApp } from './styles';
import Routes from './routes';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StyledApp className="d-flex flex-column">
      <Header />
      <NavBar />
      <Routes />
      <Footer />
    </StyledApp>
  );
}

export default App;
