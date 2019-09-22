import React, { Component } from 'react'; 
import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

class AboutContainer extends Component {
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
                    About us
                </Typography>
                <br/>
                <Typography variant='h6' align='left'>
                    This project was inspired by the <Link path=
                    'http://www.empowersf.org/neighborfest/'> Neighborfest Empowerment Network (NEN)
                    </Link>, a program that is dedicated to building resilience across various 
                    neighborhoods. By providing toolkits to help communities organize these "block parties", 
                    they have been incredibly successful in their mission of forming local support groups to share
                    local news, information, and resources to better prepare everyone for unpredictable events
                    before they occur, and without taking a fear-based approach.
                    <br/>
                    <br/>
                    On our social platform, members of a community can post announcements, 
                    share local events, and offer resources to others in need. 
                    EmpoweredBy.Tech was created with these people in mind. We believe that we can 
                    reduce the societal barriers even further by taking advantage of more recent
                    technological advancements to make these support groups even more accessible.
                </Typography>
                
            </Container>
        );
    }
}



export default AboutContainer;