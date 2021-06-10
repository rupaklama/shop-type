import './homePage.styles.css';

import ShopQuality from '../../components/shopQuality/ShopQuality';
import BestSeller from '../bestSeller/BestSeller';
import Partners from '../../components/partners/Partners';

const HomePage: React.FC = () => {
  return (
    <div className='homepage-container'>
      <div className='cover-image' />
      <ShopQuality />
      <BestSeller />
      <Partners />
    </div>
  );
};

export default HomePage;
