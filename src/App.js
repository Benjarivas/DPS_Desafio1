import './App.css';
//import Card from './components/Card';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
