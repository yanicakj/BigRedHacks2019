import React, { Component } from 'react'; 
import { Container, Typography } from '@material-ui/core';
import ZipInput from './ZipInput';
import SignUpHomepageButton from './SignUpHomepageButton';
import ExistingAccountHomepageLink from './ExistingAccountHomepageLink';
import DisabledSignUp from './DisabledSignUp';

class IntroContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {validZip: false, entry: '' };
        this.checkZip = this.checkZip.bind(this);
    }

    checkZip(zipInput){
        this.setState({
            validZip: zipInput,
            entry: this.props.entry
        });
    }

    render () {
        return (
            <Container>
                <br />
                <br />
                <Typography variant='h2' align='center'>
                    Building support on a local level
                </Typography>
                <Typography variant='h4' align='center'>
                    <br />
                    Find your community:
                </Typography>
                <br />
                <br />
                <div align='center'>
                <ZipInput entry={this.state.entry} onChange={this.checkZip}/>
                    <br />
                    { this.state.validZip ?
                    <SignUpHomepageButton zipEntry={this.props.entry}/> : <DisabledSignUp /> }
                    <br />
                    <ExistingAccountHomepageLink />
                </div>
                
                <br />
                <br />
            </Container>
        );
    }
}



export default IntroContainer;