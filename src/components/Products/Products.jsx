import { useState } from 'react';
import ProductModal from '../ProductModal';

const Products = ({productsList}) => {

    const [currentProduct, setCurrentProduct] = useState({});
    const [showProductModal, setShowProductModal] = useState(false);
    
    const handleProductClick = (product) => {
        setCurrentProduct(product);
        setShowProductModal(!showProductModal);
    }

    return (
        <>
            <section className='products'>            
                {
                    productsList.length > 0 ?
                    <section className='container'>
                        {
                            productsList.map(product => {
                                return (
                                    <button key={product.id} className='product' onClick={() => handleProductClick(product)}>
                                        <img src={product.imgURL} alt={product.name} />
                                        <h3>{product.title}</h3>
                                    </button>
                                )
                            })
                        }
                    </section> :
                    <span className='not-found'>No products found</span>
                }            
            </section>
            <ProductModal currentProduct={currentProduct} show={showProductModal} closeModal={() => setShowProductModal(!showProductModal)}/>
        </>
    );
}

export default Products;