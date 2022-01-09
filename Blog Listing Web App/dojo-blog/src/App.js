//import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to the new blog';
  // window.react1 = require('react');
  // require('react-dom');
  // window.React2=require('react');
  // console.log(window.React1 === window.React2);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
