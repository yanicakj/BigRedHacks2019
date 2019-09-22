import React, {Component}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { MemoryRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

function toRegister() {
    return <Link to="/register/" />
};

class SignUpHomepageButton extends Component {

    render () {
        
        return (
            <div>
                    <Button variant='contained' 
                    className={useStyles.button}
                    color='primary'
                    href='/register/'>
                        Join my neighborhood!
                    </Button>
            </div>
        );
    };
}

export default SignUpHomepageButton;