import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ZipInput from './ZipInput';

const IntroContainer = () => (
    <Container fixed>
        <Typography variant='h4' align='center'>
            <br />
            Find your community:
        </Typography>
        <br />
        <br />
        <div align='center'>
            <ZipInput />
        </div>
        <br />
        <br />
    </Container>
);

export default IntroContainer;