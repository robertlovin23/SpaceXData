import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LaunchPage from './pages/LaunchPage';
import MainPage from './pages/MainPage';
import RocketPage from './pages/RocketPage';
import LaunchpadPage from './pages/LaunchpadPage'


const App = () => {
  return(
    <BrowserRouter>
      <Header/>
        <div>
          <Route path="/" exact component={MainPage}/>
          <Route path="/launches" component={LaunchPage}/>
          <Route path="/rockets" component={RocketPage}/>
          <Route path="/launchpad" component={LaunchpadPage}/>
        </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;

