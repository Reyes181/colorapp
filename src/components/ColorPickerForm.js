import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {ChromePicker} from 'react-color';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state = {currentColor: 'red', newColorName: ''};
    }

    updateCurrentColor = (newColor) => {
        this.setState({
          currentColor: newColor.hex
        })
    }

    handleChange = (evt) => {
        this.setState({
         [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({
            newColorName: ''
        })
    }

    render() {
        const {paletteIsFull, classes} = this.props;
        const {currentColor, newColorName} = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.colorPicker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
                    <TextValidator 
                        className={classes.colorName}
                        placeholder="add color's name..."
                        value={newColorName}
                        name="newColorName"
                        variant='outlined'
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["a name for color is required","color name is taken", "color already used" ]}
                    />
                    <Button 
                        varient="contained" 
                        style={{backgroundColor: paletteIsFull ? '#A8A8A8' : currentColor, color: 'white'}}
                        type='submit'
                        disabled={paletteIsFull}
                        className={classes.addColor}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}
export default withStyles(styles)(ColorPickerForm);