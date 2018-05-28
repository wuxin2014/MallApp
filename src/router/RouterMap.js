import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../container/home/Home';
import NotFound from '../components/common/NotFound';
import ProductDetail from '../container/detail/ProductDetail';
import Login from '../container/login/Login';

const height = document.documentElement.clientHeight;

const RouterMap = () => {
  return (
      <Router>
        <div style={{height: '100vh', position: 'relative'}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/detail/:id" component={ProductDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
};

export default RouterMap;