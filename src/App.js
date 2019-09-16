import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './pages/Auth/Login'
import Registrasi from './pages/Auth/Registrasi'
import LupaPassword from './pages/Auth/LupaPassword'
import notFound from './pages/Auth/notFound'
import Private from './pages/private'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/lupa-password" component={LupaPassword}/>
        <Route path="/pengaturan" component={Private} />
        <Route path="/produk" component={Private} />
        <Route component={notFound}/>
      </Switch>
    </Router>
  );
}

export default App;
