import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';

import './index.css';
import { Products } from './components/organisms/products/products';
import { constants } from './constants';
import { ProductDetails } from './components/organisms/productDetails/productDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Navigate to={constants.routes.products} />} />
        <Route path={constants.routes.products} element={<Products />} />
        <Route
          path={constants.routes.productDetails}
          element={<ProductDetails />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
);
