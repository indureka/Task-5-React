import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert('Item already added to the cart');
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <ProductList addToCart={addToCart} />
      {isCartOpen && (
        <CartModal 
          cartItems={cart} 
          removeFromCart={removeFromCart} 
          closeCart={() => setIsCartOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
