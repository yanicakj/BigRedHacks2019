import React, { Component } from 'react'; 
import { Container, Typography } from '@material-ui/core';

class SupportContainer extends Component {
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
                    Support page!
                </Typography>
            </Container>
        );
    }
}



export default SupportContainer;