import React, { Component } from 'react'; 
import { Container, Typography, Button, Divider, List } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

class BoardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: []
        };
    }

    render () {
        return (
            <div style={{alignSelf:'right'}}>
                <br />
                
            <Container>
                
                <br />
                <Typography variant='h3'>
                    Community Board
                </Typography>
                <br />
                <Divider />
                <br />
                <span><Button variant='contained' style={{backgroundColor:'#b31b1b', color:'white',borderColor:'black'}}>
                    <Add  />
                    Add a post
                </Button></span>
                <List>

                </List>
                
            </Container>
            </div>
        );
    }
}



export default BoardContainer;