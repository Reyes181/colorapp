import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import seedColors from './utils/seedColors';
import PaletteList from './hoc/PaletteList';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import Page from './hoc/Page';
import {generatePalette} from './utils/colorHelper';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component {
  constructor(props){
    super(props);
    const savePalettes = JSON.parse(window.localStorage.getItem('palettes'))
    this.state = {
      palettes: savePalettes || seedColors
    }
  }

  findPalette = (id) => {
    return this.state.palettes.find(function(palette){
      return palette.id === id;
    })
  }

  savePalette = (newPalette) => {
    this.setState({palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage)
  }

  deletePalette = (id) => {
    this.setState(
      st => ({palettes: st.palettes.filter(palette => palette.id !== id)}),
      this.syncLocalStorage
    )
  }

  syncLocalStorage = () =>{
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <div>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new'
                  render={
                    routeProps => (
                      <Page>
                          <NewPaletteForm 
                            palettes={this.state.palettes} 
                            savePalette={this.savePalette} {...routeProps}
                          />
                      </Page>
                    )
                  }
                />
                <Route 
                  exact 
                  path="/palette/:paletteId/:colorId"
                  render={
                    routeProps => (
                      <Page>
                          <SingleColorPalette
                            colorId={routeProps.match.params.colorId}
                            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                          />
                      </Page>
                    )
                  }
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={
                    routeProps => (
                      <Page>
                        <Palette
                          palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                        />
                      </Page>
                    )
                  }
                />
                <Route 
                  exact 
                  path='/' 
                  render={
                    routeProps => (
                      <Page>
                        <PaletteList 
                          palettes={this.state.palettes} 
                          deletePalette={this.deletePalette} {...routeProps}
                        />
                      </Page>
                    )
                  }
                />
                <Route 
                  render={
                    routeProps => (
                      <Page>
                        <PaletteList 
                          palettes={this.state.palettes} 
                          deletePalette={this.deletePalette} {...routeProps}
                        />
                      </Page>
                    )
                  }
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
        {/* <Palette palette={generatePalette(seedColors[4])}/> */}
      </div>
    );
  }
}

export default App;
