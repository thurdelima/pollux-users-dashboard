import {BrowserRouter as Router, Route} from 'react-router-dom';

import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route  path="/create-user" component={CreateUser} />
      <Route  path="/dashboard" component={Dashboard} />

    </Router>
  );
}

export default App;
