import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ZipInput from './ZipInput';
import SignUpHomepageButton from './SignUpHomepageButton';
import ExistingAccountHomepageLink from './ExistingAccountHomepageLink';


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
            <br />
            <SignUpHomepageButton />
            <ExistingAccountHomepageLink />
        </div>
        
        <br />
        <br />
    </Container>
);

export default IntroContainer;