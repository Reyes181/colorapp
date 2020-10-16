import React, {Component} from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './SingleColorFooter';
import {Link} from 'react-router-dom';
import styles from '../styles/PaletteStyles';
import {withStyles} from '@material-ui/styles';



class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: 'hex'
        }
    }

    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;

        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        return shades.slice(1)
    }

    changeFormat = (val) => {
        this.setState({
            format: val
        })
    }

    render(){
        const {classes} = this.props;
        const {paletteName, emoji, id} = this.props.palette;
        const colorBoxes = this._shades.map((color, i) => (
            <ColorBox key={i} name={color.name} background={color[this.state.format]} showLink={false}/>
        ));
        return (
            <div className={classes.Palette}>
                <NavBar handleChange={this.changeFormat} showsAllColors={false}/>
                
                <div className={classes.paletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`} className={classes.backButton}>Go Back</Link>
                    </div>
                </div>
                
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);