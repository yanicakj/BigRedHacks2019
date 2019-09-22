import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FeedbackIcon from '@material-ui/icons/Feedback';
import WorkIcon from '@material-ui/icons/Work';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import Logo from './Logo';
import BoardContainer from './BoardContainer';
import Button from '@material-ui/core/Button'; //todo: routing
import InteractiveMap from './InteractiveMap';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Board(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
        <List>
            <ListItem><Logo /></ListItem>
      </List>
      <Divider />
      <List>
        <Button fullWidth href='/board/'>
            <ListItem>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='Home'></ListItemText>
            </ListItem>
        </Button>
        <Button fullWidth>
            <ListItem>
                <ListItemIcon><FindReplaceIcon/></ListItemIcon>
                <ListItemText primary='Resources'></ListItemText>
            </ListItem>
        </Button>
        <Button fullWidth>
            <ListItem>
                <ListItemIcon><DateRangeIcon /></ListItemIcon>
                <ListItemText primary='Calendar'></ListItemText>
            </ListItem>
        </Button>
        <Button fullWidth>
            <ListItem>
                <ListItemIcon><WorkIcon/></ListItemIcon>
                <ListItemText primary='Partnership'></ListItemText>
            </ListItem>
        </Button>
        <Button fullWidth>
            <ListItem>
                <ListItemIcon><CodeIcon/></ListItemIcon>
                <ListItemText primary='About Us'></ListItemText>
            </ListItem>
        </Button>
      <Button fullWidth>
        <ListItem>
            <ListItemIcon><ContactSupportIcon/></ListItemIcon>
            <ListItemText primary='Support'></ListItemText>
        </ListItem>
        </Button>
        <Button fullWidth>
        <ListItem>
            <ListItemIcon><FeedbackIcon/></ListItemIcon>
            <ListItemText primary='Feedback'></ListItemText>
        </ListItem>
        </Button>
      </List>
    </div>
  );

  return (
      <React.Fragment>
    <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={handleDrawerToggle}
    className={classes.menuButton}
  >
    <MenuIcon />
  </IconButton>
    <div className={classes.root}>
      
      <CssBaseline />
        
      <nav className={classes.drawer} aria-label="main">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.content}>
        <BoardContainer/>
        </div>
      </main>
    </div>
    </React.Fragment>
  );
}

Board.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Board;