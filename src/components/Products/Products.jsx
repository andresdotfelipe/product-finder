const Products = ({productsList}) => {        
    return (
        <section className='products'>            
            {
                productsList[0] ?
                <section className='container'>
                    {
                        productsList.map(product => {
                            return (
                                <article key={product.id} className='product'>
                                    <img src={product.imgURL} alt={product.name} />
                                    <h3>{product.title}</h3>
                                </article>
                            )
                        })
                    }
                </section> :
                <span className='not-found'>No products found</span>
            }                     
        </section>
    );
}

export default Products;