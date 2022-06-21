import './App.scss';
import Header from './components/Header';
import Products from './components/Products';
import { useState } from 'react';
import productsList from './utils/Products.json';

const App = () => {
  const [currentProducts, setCurrentProducts] = useState(productsList);

  const handleCurrentProducts = products => {
    setCurrentProducts(products);
  }

  return (
    <section className='app'>
      <Header handleCurrentProducts={handleCurrentProducts} />
      <Products productsList={currentProducts} />
    </section>
  );
}

export default App;
