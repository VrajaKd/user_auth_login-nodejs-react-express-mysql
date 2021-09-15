import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import classes from './login.component.module.css'
import Alert from '@material-ui/lab/Alert';

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button
} from '@material-ui/core';
import AuthService from "../services/auth.service";

const Register = () => {
  // Set alert state
  const [ alert, setAlert] = useState(false);
  // Set alert message state
  const [ alertMessage, setAlertMessage] = useState(null);

  // Set validation criteria
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(4, 'Username must be at least 4 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }  // Set validation error states
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  // Handle Register button click
  const onSubmit = data => {
    AuthService.register(data.username, data.email, data.password).then(
      (resp) => {
        window.location.replace("/login");
      },
      error => {
        setAlert(true);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setAlertMessage(resMessage)
      },
    );
  };

  return (
    <Fragment>
      <Paper>
        <Box mt={5} px={3} py={5}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                inputProps={{
                  style: {
                    padding: 10
                  }
                }}
                required
                id="username"
                name="username"
                label="Username"
                fullWidth
                margin="dense"
                {...register('username')}
                error={!!errors.username}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.username?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                inputProps={{
                  style: {
                    padding: 10
                  }
                }}
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register('email')}
                error={!!errors.email}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                inputProps={{
                  style: {
                    padding: 10
                  }
                }}
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('password')}
                error={!!errors.password}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
            { alert && <Alert severity="error" className={classes.warning}> {alertMessage} </Alert>}
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default Register;