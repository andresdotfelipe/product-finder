const ProductModal = ({currentProduct, show, closeModal}) => {
    return (
        <>
            {
                show &&
                <section className='product-modal'>
                    <section className='container'>
                        <button className='close-modal-button' onClick={closeModal}>X</button>
                        <h1>Product details</h1>
                        <img src={currentProduct.imgURL} alt={currentProduct.name} />
                        <span>Title: {currentProduct.title}</span>
                        <p>Description: {currentProduct.description}</p>
                        <span>Stock: {currentProduct.stock}</span>
                        <span>Unit: {currentProduct.unit}</span>
                    </section>
                </section>
            }
        </>
    );
}

export default ProductModal;