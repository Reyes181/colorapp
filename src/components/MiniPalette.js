import React, {PureComponent} from 'react';
import styles from '../styles/MiniPaletteStyles';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';


class MiniPalette extends PureComponent {
    deletePalette = (e) =>{
        e.stopPropagation();
        this.props.openDialog(this.props.id)
    }
    render(){
        const {classes, paletteName, colors, emoji, handleClick, id} = this.props;
        const miniColorBoxes = colors.map(color => (
            <div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}></div>
        ))
        return (
            <div className={classes.root} onClick={() => handleClick(id)}>
                <DeleteIcon 
                    style={{transition: 'all 0.3s ease-in-out'}}
                    className={classes.deleteIcon}
                    onClick={this.deletePalette}
                />
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>
                
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);