import React, { Component } from "react";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import {Box} from "@material-ui/core";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  // Set user state
  componentDidMount(d) {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    const {currentUser} = this.state;
    return (
      <Box>
        {currentUser ? (
          <h4>Yay, you’re logged in!</h4>
        ) : (
          <h4>You are not logged in, try it!</h4>
        )}
      </Box>
    );
  }
}

