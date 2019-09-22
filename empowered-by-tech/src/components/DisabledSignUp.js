import React, {Component}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

class DisabledSignUp extends Component {

    render () {
        return (
            <div>
                <Button variant='contained' 
                className={useStyles.button}
                color='primary'
                disabled>
                    Join neighborhood
                </Button>
            </div>
        );
    };
}

export default DisabledSignUp;