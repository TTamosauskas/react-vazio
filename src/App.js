import React from 'react';
import { StyledApp } from './styles';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Routes from './routes';
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
