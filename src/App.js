import React, {lazy, Suspense } from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './components/HomePage';

const SearchPage = lazy(()=>import('./components/searchPage'));
const ProductPage = lazy(()=>import('./components/productPage'));


const app = props => {
  let routes =(
    <Switch>
      <Route path="/items/:id" render={(props)=> <ProductPage {...props} />} />
      <Route path="/items" render={(props)=> <SearchPage {...props} />} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
  
  return (
    <div><Layout><Suspense fallback={<p>Loading...</p>}>{routes}</Suspense></Layout></div>
  );
}

export default app;
