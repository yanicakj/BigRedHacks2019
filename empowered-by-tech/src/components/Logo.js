import React, { Component } from 'react';
import CodeIcon from '@material-ui/icons/Code';
import { Typography, Container, Button, Box } from '@material-ui/core';

const Logo = () => (

        <Container fixed align='center' style={{boxShadow:'20px'}} >
        <Button variant='outlined' style={{borderColor: 'black', borderWidth: 10,
        backgroundColor: '#b31b1b', color: 'white', align:'center'}} path='/'>
                <h4>{'<Empowered'}
                <br />
                {'By Tech/>'}</h4>
        </Button>
        </Container>

);

export default Logo;