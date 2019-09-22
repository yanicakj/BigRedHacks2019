import React, { Component } from 'react'; 
import { Container, Typography } from '@material-ui/core';

class BoardContainer extends Component {
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
                    Community Board
                </Typography>
                
            </Container>
        );
    }
}



export default BoardContainer;