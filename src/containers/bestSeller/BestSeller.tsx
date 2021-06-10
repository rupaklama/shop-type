import ProductCard from '../../components/productCard/ProductCard';
import './bestSeller.styles.css';

const BestSeller: React.FC = () => {
  return (
    <div className='best-seller-container'>
      <h2>Best Seller</h2>

      <div className='best-seller-products'>
        <ProductCard
          url='http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png'
          name='Formal Dress Shirts Casual Long Sleeve Slim Fit'
        />
        <ProductCard
          url='http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png'
          name='Formal Dress Shirts Casual Long Sleeve Slim Fit'
        />
        <ProductCard
          url='http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png'
          name='Formal Dress Shirts Casual Long Sleeve Slim Fit'
        />
      </div>
    </div>
  );
};

export default BestSeller;
