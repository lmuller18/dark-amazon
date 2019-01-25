import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Particles from 'react-particles-js';
import { ThemeProvider } from 'styled-components';
import { ThemeParticles } from '../../components/Shared/Util';
import { StyledLink } from '../../components/Shared/Styled';
import { themes } from '../../components/Shared/Shared';
import ThemePicker from '../../components/ThemePicker/ThemePicker';
import Greeting from '../Greeting/Greeting';
import Projects from '../Projects/Projects';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes[0], themes };
  }

  changeTheme = theme => {
    this.setState({
      theme: theme,
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <div
            style={{ position: 'absolute', top: '1rem', right: '1rem' }} >
            <ThemePicker
              theme={this.state.theme}
              themes={this.state.themes}
              changeTheme={this.changeTheme}
            />
          </div>
          <div className="content">
            <div className="particles-container">
              <Particles
                params={ThemeParticles(this.state.theme.particleColor)}
                width="100%"
                height="100vh"
                style={{ background: `${this.state.theme.backgroundColor}` }}
              />
            </div>
            <div className="header">
              <Greeting theme={this.state.theme} />
            </div>
            <Router>
              <div>
                <div className="link-container">
                  <StyledLink to="/" theme={this.state.theme}>Home</StyledLink>
                  <StyledLink to="/projects" theme={this.state.theme}>Projects</StyledLink>
                  <StyledLink to="/resume" theme={this.state.theme}>Resume</StyledLink>
                </div>
                <hr />
                <Route exact path="/" render={() => <div>Test</div>} />
                <Route path="/projects" render={() => <Projects theme={this.state.theme} />} />
              </div>
            </Router>
          </div>
        </React.Fragment >
      </ThemeProvider >
    );
  }
}

export default App;
