import React from 'react';
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

export default function SignUpHomepageButton() {
    const classes = useStyles();
    return (
        <div>
            <Button variant='contained' className={classes.button} color='primary'>
                Join my neighborhood!
            </Button>
        </div>
    );
}