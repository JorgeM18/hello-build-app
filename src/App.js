import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import GitHub from './components/GitHub/GitHub';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/github' component={GitHub} />
      </Switch>
    </div>
  );
}

export default App;
