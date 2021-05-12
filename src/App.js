import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home' 
import AppNav from './Components/AppNav' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
        <AppNav></AppNav>
  
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/dashboard">
            
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
