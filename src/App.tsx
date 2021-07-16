import './App.css';
import { 
    Route, 
    Redirect, 
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'
import Resume from './pages/resume/Resume'
import { useEffect } from 'react';
import Blog from './pages/blog/Blog';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/navbar/Navbar';

export default function App() {
  useEffect(() => { 
    document.title = "Adam Gwilliam"; 
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/blog/first-post" />
          </Route>
          <Route exact path="/resume" render={() => <Resume />} />
          <Route path="/blog/:title" render={({match}) => <Blog title={match.params.title} />} />
          <Route render={()=> <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
}
