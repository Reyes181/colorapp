import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteDetail extends Component {
    state = {
        form: 'name',
        newPaletteName: ''
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()));
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    dialogClose = () => {
        this.props.onClose(false)
    }

    showEmoji = () => {
        this.setState({
            form: 'emoji'
        })
    }

    savePalette = (emoji) => {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette)
        this.setState({
            form: ''
        })
    }

    render(){
        const {newPaletteName, form} = this.state;
        return (
            <div>
                <Dialog open={form === 'emoji'}>
                    <DialogTitle id="simple-dialog-title">Choose Emoji</DialogTitle>
                    <Picker title='Pick emoji for palette' set='twitter' onSelect={this.savePalette}/>
                </Dialog>
                <Dialog onClose={this.dialogClose} aria-labelledby="simple-dialog-title" open={form === 'name'}>
                    <DialogTitle id="simple-dialog-title">Save New Palatte</DialogTitle>
                    <ValidatorForm onSubmit={this.showEmoji}>
                        <DialogContent>
                            <DialogContentText>
                                Make sure palette name is unique.
                            </DialogContentText>
                            <TextValidator 
                                fullWidth
                                margin='normal'
                                label='Palette Name' 
                                name="newPaletteName" 
                                value={newPaletteName}
                                onChange={this.handleChange}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already used"]}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" type='submit' color="primary">
                                Save Palette
                            </Button>
                        </DialogActions>
                        
                    </ValidatorForm>
                </Dialog>
            </div>
        )
    }
}

export default PaletteDetail