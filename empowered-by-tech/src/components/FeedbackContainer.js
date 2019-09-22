import React, { Component } from 'react'; 
import { Container, Typography } from '@material-ui/core';

class FeedbackContainer extends Component {
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
                    Give us some feedback!
                </Typography>
            </Container>
        );
    }
}



export default FeedbackContainer;