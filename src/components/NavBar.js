import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {withStyles} from '@material-ui/styles';
import styles from '../styles/NavbarStyles';
import '../css/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false
        }
    }

    handleChange = (e) => {
        this.setState({
            format: e.target.value,
            open: true
        });
        this.props.handleChange(e.target.value)
    }

    closeSnackbar = () => {
        this.setState({
            open: false
        })
    }

    render(){
        const {classes} = this.props;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">Flat UI Colors</Link>
                </div>

                {this.props.showsAllColors && (
                    <div>
                        <span>Level: {this.props.level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={this.props.level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={this.props.changeLevel}
                            />
                        </div>
                    </div>
                )}
                
                <div className={classes.selectContainer}>
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">
                            HEX - #FFFFFF
                        </MenuItem>
                        <MenuItem value="rgb">
                            RGB - rgb(255, 255, 255)
                        </MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgba(255, 255, 255, 1.0)
                        </MenuItem>
                    </Select>
                </div>

                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to {(this.state.format).toUpperCase()}</span>}
                    ContentPorps={{"aria-describedby": "message-id"}}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit'>
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(NavBar);