import React, { Component } from 'react'; 
import { Container, Typography } from '@material-ui/core';
import InteractiveMap from './InteractiveMap';

class HelpMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <Container>
                <br />
                <br />
                <Typography variant='h3' align='left'>
                    Help Map
                </Typography>
                <br />
                <br />
                <InteractiveMap/>
            </Container>
        );
    }
}



export default HelpMapContainer;