//core
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader'
import './App.css';

//components
import PostList from './containers/post-list';

//pages
import LoginPage from './pages/login';
import ExplorePage from './pages/explore'

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={PostList} />
          <Route path="/login" component={LoginPage} />
          <Route path="/explore" component={ExplorePage} />
      </div>
    );
  }

  componentDidMount() {
  }
}

export default hot(module)(App);