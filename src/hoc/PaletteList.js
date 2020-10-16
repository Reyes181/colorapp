import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from '../components/MiniPalette';
import styles from '../styles/PaletteListStyles';
import {withStyles} from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Logo from '../styles/logo.png';


class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            openDeleteDialog: false,
            deleteId: ''
        };
    }
    openDialog = (id) => {
        this.setState({
            openDeleteDialog: true,
            deleteId: id
        })
    }
    closeDialog = () => {
        this.setState({
            openDeleteDialog: false,
            deleteId: ''
        })
    }
    handleDelete = () => {
        this.props.deletePalette(this.state.deleteId);
        this.closeDialog();
    }
    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        {/* <h1 className={classes.header}>Flat Ui Colors</h1> */}
                        <div className={classes.logo} style={{background: `url(${Logo})`}}/>
                        <Link to='/palette/new' style={{textDecoration: 'none'}}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.button}
                            >
                                Create Palette
                            </Button>
                        </Link>
                    </nav>

                    
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map((palette, i) => (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                                <div key={i}>
                                    <MiniPalette 
                                        {...palette} 
                                        handleClick={this.goToPalette}
                                        // deletePalette={deletePalette}
                                        openDialog={this.openDialog}
                                        key={palette.id}
                                        id={palette.id}
                                    />
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog open={this.state.openDeleteDialog} onClose={this.closeDialog} aria-labelledby='delete-dialog-title'>
                    <DialogTitle>Delete this Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: green[100], color: green[600]}}>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete'/>
                        </ListItem>

                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel'/>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);