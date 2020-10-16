import React, {Component} from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DragboxList from './DragboxList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import {ValidatorForm} from 'react-material-ui-form-validator'
import { arrayMove } from 'react-sortable-hoc';
import styles from '../styles/NewPaletteFormStyles';
import seedColors from '../utils/seedColors';



class NewPaletteForm extends Component {
    static defaultProps = {
      maxColors: 20
    }
    state = {
        open: false,
        currentColor: '',
        newColorName: '',
        newPaletteName: '',
        colors: seedColors[0].colors
    }

    componentDidMount(){
      ValidatorForm.addValidationRule('isColorNameUnique', value => this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()));
      ValidatorForm.addValidationRule('isColorUnique', value => this.state.colors.every(({ color }) => color !== this.state.currentColor));
      this.setState({
        colors: this.props.palettes[0].colors
      })
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    }

    handleDrawerClose = () => {
        this.setState({open: false})
    }

    updateCurrentColor = (newColor) => {
      this.setState({
        currentColor: newColor.hex
      })
    }

    addNewColor = (newColor) => {
      this.setState({
        colors: [...this.state.colors, newColor],
        newColorName: ''
      })
    }

    handleChange = (evt) => {
      this.setState({
       [evt.target.name]: evt.target.value
      })
    }

    handleSubmit = (newPalette) => {
      newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
      newPalette.colors = this.state.colors
      // const newPalette = {
      //   paletteName: newPaletteName,
      //   id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      //   colors: this.state.colors
      // };
      this.props.savePalette(newPalette);
      this.props.history.push("/");
    }

    removeColor = (colorName) => {
      this.setState({
        colors: this.state.colors.filter(color => color.name !== colorName)
      })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({colors}) => ({
        colors: arrayMove(colors, oldIndex, newIndex)
      }))
    }

    clearPalette = () => {
      this.setState({
        colors: []
      })
    }

    addRandomColor = () => {
      const allColors = this.props.palettes.map(p => p.colors).flat();
      let rand;
      let randomColors;
      let isDuplicateColor = true;
      while (isDuplicateColor){
        rand = Math.floor(Math.random() * allColors.length);
        randomColors = allColors[rand];
        isDuplicateColor = this.state.colors.some(color => color.name === randomColors.name)
      }
      this.setState({
        colors: [...this.state.colors, randomColors]
      })
    }

    render() {
        const {classes, palettes, ...other} = this.props;
        const {open} = this.state;
        const paletteIsFull = this.state.colors.length >= this.props.maxColors
        return(
            <div className={classes.root}>
                <PaletteFormNav 
                  handleSubmit={this.handleSubmit} 
                  open={open} 
                  {...other}
                  palettes={palettes}
                  handleDrawerOpen={this.handleDrawerOpen}
                />
                <Drawer
                    className={classes.drawer}
                    varient='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>

                    <Divider/>

                    <div className={classes.container}>
                      <Typography varient="h3">Design Your Own Palette</Typography>
                      <div className={classes.buttons}>
                        <Button className={classes.button} varient="contained" color="secondary" onClick={this.clearPalette}>Clear Palette</Button>
                        <Button className={classes.button} varient="contained" color="primary" onClick={this.addRandomColor} disabled={paletteIsFull}>Random Color</Button>
                      </div>
                      <ColorPickerForm paletteIsFull={paletteIsFull} addNewColor={this.addNewColor}/>
                    </div>
                    
                    <Divider/>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader}/>
                    
                    <DragboxList
                      colors={this.state.colors}
                      removeColor={this.removeColor}
                      axis='xy'
                      onSortEnd={this.onSortEnd}
                      distance={25}
                    /> 
                    
                </main>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(NewPaletteForm);