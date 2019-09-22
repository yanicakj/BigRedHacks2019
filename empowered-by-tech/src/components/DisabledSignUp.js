import React, {Component}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Tooltip } from '@material-ui/core';

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
            
                <Tooltip title="Enter a valid zipcode">
                    <div>
                <span>
                    <Button variant='contained' 
                    className={useStyles.button}
                    color='primary'
                    disabled>
                        Join neighborhood
                    </Button>
                </span>
                </div>
                </Tooltip>
           
        );
    };
}

export default DisabledSignUp;