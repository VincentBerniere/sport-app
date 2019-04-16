import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

import Header from './Header/Header.js';
import Authentification from './Content/Authentification/Authentification';
import TrainingList from './Content/TrainingList/TrainingList';
import TrainingCreate from './Content/TrainingCreate/TrainingCreate';
import TrainingDetail from './Content/TrainingDetail/TrainingDetail';

class App extends Component {

  render() {
    return (
      <div id="app" className="ui container">
        <BrowserRouter>
          <Header />

          <div id="content">
            <Route path="/" exact component={Authentification} />
            <Route path="/trainings" exact component={TrainingList} />
            <Route path="/trainings/new" exact component={TrainingCreate} />
            <Route path="/trainings/edit" exact component={TrainingList} />
            <Route path="/trainings/delete" exact component={TrainingList} />
            <Route path="/trainings/detail" exact component={TrainingDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
