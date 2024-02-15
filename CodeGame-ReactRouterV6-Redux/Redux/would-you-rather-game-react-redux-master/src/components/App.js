import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Leadboard from './Leadboard';
import NewQuestion from './NewQuestions';
import Question from './Question';
import Page404 from './Page404';
import { handleInitialData } from './../actions/shared';
import { setAuthedUser } from './../actions/authedUser';
import { PrivateRoute } from './PrivateRoute';
import LoadingBar from 'react-redux-loading-bar';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
    // const userId = localStorage.getItem('userId');
    this.props.dispatch(setAuthedUser());
  }

  render() {
    const { authedUser } = this.props;
    const HomeComponent =  authedUser === null ? Login : Home;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                { authedUser && <Navbar dispatch={this.props.dispatch}/> }
                <Switch>
                  <Route path="/" exact component={HomeComponent} />
                  <PrivateRoute path="/question/:id" authedUser={authedUser} component={Question} />
                  <PrivateRoute path="/leadboard" authedUser={authedUser} component={Leadboard}/>
                  <PrivateRoute path="/add" authedUser={authedUser} component={NewQuestion} />
                  <Route component={Page404}/>
                </Switch>
              </div>
            </div>
          </section>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(App);
