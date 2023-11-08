import add from '../Cart/Cart'
import Cart from '../Cart/Cart'
import './Product.css'

export default function ProductCard({products}){
    return (
        <>
            <div className='card'>
                <div className='card-container'>
                    {products.map((product, index) => 
                        
                        <div key={index} className='product-card'>
                            <div className='product-card-container'>
                                <img className='product-image' src={product.image} alt={product.title} />

                                <div className='product-title-container'>
                                    <h3 className='product-name'>{product.title}</h3>
                                </div>

                                <div className='product-desc-container'>
                                    <h3 className='product-desc-title'>Description</h3>
                                    <p className='product-desc'>{product.description.slice(0,120)}</p>
                                </div>

                                <div className='add-product-container'>
                                    <button id='add-btn' onClick={add(product)}>Add To Cart</button>
                                </div>
                            </div>                            
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


