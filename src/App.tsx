import { useEffect } from 'react';
import { 
    Route, 
    Redirect, 
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Blog from './pages/blog/Blog';
import Resume from './pages/resume/Resume';
import NotFound from './pages/notFound/NotFound';

import './App.css';

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
