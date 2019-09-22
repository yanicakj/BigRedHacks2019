import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const classes = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

class ZipInput extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const input = e.target.value;
        var zip = require('zippo')
        
        this.props.onChange(zip.validate(input));
    }

    render () {
        return (
            <Paper className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Enter Zipcode"
                inputProps={{ 'aria-label': 'enter zip code' }}
                onChange={this.handleChange}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          );
    }
  
}

export default ZipInput;