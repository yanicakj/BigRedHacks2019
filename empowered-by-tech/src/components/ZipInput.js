import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const classes = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    display: 'inline',
    padding: 10,
  },
  divider: {
    display: 'inline',
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
            <div className={classes.root}>
              <TextField
                className={classes.input}
                type="search"
                label="Enter Zipcode"
                inputProps={{ 'aria-label': 'enter zip code' }}
                onChange={this.handleChange}
              >
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
              </TextField>
            </div>
          );
    }
  
}

export default ZipInput;