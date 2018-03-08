import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>


class App extends Component {
  componentDidMount() {
    this.props.fetchKeys();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div> 
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/account" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
   );
  }
};

export default connect(null, actions)(App);