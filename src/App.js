import React, {lazy, Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';

const SearchPage = lazy(()=>import('./components/searchPage'));
const HomePage = lazy(()=>import('./components/homePage'));
const ProductPage = lazy(()=>import('./components/productPage'));


const app = props => {
  let routes =(
    <Switch>
      <Route path="/" exact render={(props)=> <HomePage {...props }/>} />
      <Route path="/items/:id" render={(props)=> <ProductPage {...props} />} />
      <Route path="/items" render={(props)=> <SearchPage {...props} />} />
      <Route path="*" render={(props)=> <HomePage {...props }/>} />
    </Switch>
  );
  
  return (
    <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
  );
}

export default app;
