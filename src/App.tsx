import './App.css';
import { Route, Redirect, BrowserRouter } from 'react-router-dom'
import Resume from './pages/resume/Resume'
import React from 'react';
import Blog from './pages/blog/Blog';

class App extends React.Component {
  componentDidMount() {
    document.title = "Adam Gwilliam";
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/">
            <Redirect to="/resume" />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
