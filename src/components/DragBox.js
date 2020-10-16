import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from '../styles/DragBoxStyles';

const DragBox = SortableElement(props => {
    const {classes, name, color, handleClick} = props;
    return (
        <div 
            className={classes.root}
            style={{backgroundColor: color}}
        >
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteForeverIcon className={classes.deleteIcon} onClick={handleClick}/>
            </div>
        </div>
    )
})

export default withStyles(styles)(DragBox)