import React, { Component } from 'react';
import CodeIcon from '@material-ui/icons/Code';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const theme = useTheme();

class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" color='inherit' style={{marginRight: theme.spacing(2)}}>
                    {'<Empowered'}
                    <br />
                    {'By Tech />'}
                </Typography>
            </React.Fragment>
        );
    
    };
};

export default Logo;