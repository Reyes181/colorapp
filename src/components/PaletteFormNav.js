import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BuildIcon from '@material-ui/icons/Build';
import PaletteDetail from './PaletteDetail';
import styles from '../styles/PaletteFormNavStyles';


class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state = { open: false}
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = (value) => {
        this.setState({
            open: value
        })
    }

    render(){
        const {classes, open, palettes, handleSubmit} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    color="default"
                    position='fixed'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, 
                                {[classes.hide]: open}
                            )}
                        >
                            <BuildIcon/>
                        </IconButton>

                        <Typography variant='h6' color='inherit' noWrap>
                           Create A Palette
                        </Typography>
                        
                    </Toolbar>

                    <div className={classes.navButtons}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={this.handleClickOpen}
                            className={classes.button}
                        >
                            Save Palette
                        </Button>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button 
                                variant="contained" 
                                color="secondary"
                                className={classes.button}
                            >
                                Go Back
                            </Button>
                        </Link>
                    </div>
                </AppBar>
                {this.state.open && (
                    <PaletteDetail 
                        palettes={palettes}
                        handleSubmit={handleSubmit}  
                        onClose={this.handleClose}
                    />
                )}
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav);