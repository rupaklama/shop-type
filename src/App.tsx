import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ROUTE } from './constants/route';

import AllProductsPage from './containers/allProductsPage/AllProductsPage';
import CheckoutPage from './containers/checkoutPage/CheckoutPage';
import HomePage from './containers/homePage/HomePage';
import HeaderNavigation from './components/headerNavigation/HeaderNavigation';

function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Switch>
        <Route exact path={ROUTE.HOME} component={HomePage} />
        <Route exact path={ROUTE.ALL_PRODUCTS} component={AllProductsPage} />
        <Route exact path={ROUTE.CHECKOUT} component={CheckoutPage} />
        <Redirect to={ROUTE.HOME} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
