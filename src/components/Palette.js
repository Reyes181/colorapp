import React, {Component} from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './SingleColorFooter';
import styles from '../styles/PaletteStyles';
import {withStyles} from '@material-ui/styles';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        })
    }

    changeFormat = (val) => {
        this.setState({
            format: val
        })
    }

    render(){
        const {paletteName, emoji} = this.props.palette
        const {classes} = this.props;
        const colorBoxes = this.props.palette.colors[this.state.level].map((color, i) => (
            <ColorBox 
                key={i} 
                id={color.id} 
                background={color[this.state.format]} 
                name={color.name}
                paletteId={this.props.palette.id}
                showLink={true}
            />
        ))
        return(
            <div className={classes.Palette}>
                <NavBar 
                    level={this.state.level} 
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showsAllColors={true}
                />
                <div className={classes.paletteColors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);