import React, { Component } from 'react'; 
import { Container, Typography, Divider, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import MoreHoriz from '@material-ui/icons/MoreHoriz';



  const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 2,
    },
    textField: {
        margin: 20,
        flexBasis: 200,
    },
  }));

export default function RegistrationContainer () {
    const classes = useStyles();
    const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
    validUser: false,
    zipCode: ''
    });


    const handleChange = prop => event => {
        
        setValues({ username: event.target.value,  
            validUser: ((event.target.value.length >= 8) || (event.target.value.length == 0)) });

    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

    const handleMouseDownPassword = event => {
    event.preventDefault();
    };

    return (
        <div>
        <Typography variant='h3'>Registration </Typography>
        <br />
        <Divider />
        <Tooltip title={!values.validUser ? "8 character minimum" : ""}>
        <TextField
            error={(values.username.length <= 8 && values.username.length > 0) }
            id="filled-simple-start-adornment"
            className={classes.textField}
            variant="filled"
            type='text'
            label="Username"
            value={values.username}
            onChange={handleChange('username')}       
            InputProps={{
                autoComplete:"off",
                form: { autocomplete: 'off' },
              endAdornment: (<InputAdornment position="end">
                  <IconButton edge="end" style={{ color: values.username.length != 0
                   && values.validUser && '#259b24'}}
                   disabled> 
                  {(values.username.length != 0
                   && values.username.length >= 8) ? <DoneIcon /> : <MoreHoriz /> }
                  </IconButton>
              </InputAdornment>)
            }}
                style={{ justifyContent : 'space-around' }}
        />
        </Tooltip>
        <TextField
            id="filled-simple-zip"
            className={classes.textField}
            variant="filled"
            type='text'
            label="Zipcode"
            value={values.username}
            onChange={handleChange('zipCode')}       
            InputProps={{
                autoComplete:"off",
                form: { autocomplete: 'off' },
            }}
                style={{ justifyContent : 'space-around' }}
            
        />
        
        
        <TextField
            id="filled-adornment-password"
            className={classes.textField}
            color='red'
            variant="filled"
            type= {values.showPassword ?  'text' : 'password' }
            label="Password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange('password')}
            InputProps={{
                autoComplete:'new-password',
                form: { autocomplete: 'off' },
            endAdornment: (
                <InputAdornment position="end">
                <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
            ),
            }}
            style={{ justifyContent : 'space-around' }}
        />
        </div>
    );
    
};


