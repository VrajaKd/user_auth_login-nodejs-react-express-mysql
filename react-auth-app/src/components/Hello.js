import React from "react";
import {Box} from "@material-ui/core";

export default function Hello(props) {
  if (props.name) {
    return <Box><h3>Hello, {props.name}!</h3>
      <h5>Yay, you’re logged in!</h5>
    </Box>;
  } else {
    return <span>Hey, stranger</span>;
  }
}