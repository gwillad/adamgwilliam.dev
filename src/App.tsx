import './App.css';
import { Route, Redirect, BrowserRouter } from 'react-router-dom'
import Resume from './pages/Resume'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/resume" />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
