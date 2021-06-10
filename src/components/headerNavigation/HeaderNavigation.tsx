import { Link } from 'react-router-dom';

import './headerNavigation.styles.css';
import { ROUTE } from '../../constants/route';

const HeaderNavigation: React.FC = () => {
  return (
    <div className='header-nav-container'>
      <div className='nav-items-left'>
        <Link className='nav-item shopname' to={ROUTE.HOME}>
          SHOP TYPE
        </Link>
        <Link className='nav-item' to={ROUTE.ALL_PRODUCTS}>
          All Products
        </Link>
      </div>

      <div className='nav-items-right'>
        <i className='nav-item fas fa-cart-plus'></i>
      </div>
    </div>
  );
};

export default HeaderNavigation;
