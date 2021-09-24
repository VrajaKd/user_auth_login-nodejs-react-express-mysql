import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { styles } from "./css-common"

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import {AppBar, Container, Toolbar, Typography, withStyles} from '@material-ui/core';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  // Set user state
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  // Set user state by logout
  logOut() {
    AuthService.logout();
    this.setState({
        currentUser: undefined,
      });
  }

  render() {
    const {classes} = this.props;
    const currentUser = this.state.currentUser;

    return (
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Link to={"/"} className={classes.logo}>
              <Typography className={classes.name} variant="h6">
                authApp
              </Typography>
            </Link>
            <section className={classes.rightToolbar}>
              {currentUser ? (
                <Toolbar>
                  <Link to={"/login"} className={classes.link} onClick={this.logOut}>
                    <Typography variant="body2">
                      LogOut
                    </Typography>
                  </Link>
                </Toolbar>
              ) : (
                <Toolbar>
                  <Link to={"/login"} className={classes.link}>
                    <Typography variant="body2">
                      Login
                    </Typography>
                  </Link>

                  <Link to={"/register"} className={classes.link}>
                    <Typography variant="body2">
                      Sign Up
                    </Typography>
                  </Link>
                </Toolbar>
              )}
            </section>
          </Toolbar>
        </AppBar>

        <Container className={classes.middleContainer}>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);