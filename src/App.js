import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './pages/Auth/Login'
import Registrasi from './pages/Auth/Registrasi'
import LupaPassword from './pages/Auth/LupaPassword'
import notFound from './pages/Auth/notFound'
import Private from './pages/private'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Private} />
        <PrivateRoute path="/pengaturan" component={Private} />
        <PrivateRoute path="/produk" component={Private} />
        <PrivateRoute path="/transaksi" component={Private} />
        <Route path="/login" component={Login}/>
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/lupa-password" component={LupaPassword}/>
        <Route component={notFound}/>
      </Switch>
    </Router>
  );
}

export default App;
