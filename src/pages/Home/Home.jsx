import React from 'react'

import ProductCard from '../../components/ProductCard'
import { homePageProducts } from '../../constant'

const Home = () => {
    return (
        <section className='max-container padding-x pt-4 pb-12'>
            <div className='flex flex-col items-center justify-center gap-y-16'>
                {/* card */}
                {/* discount products */}
                {homePageProducts.map((product) => (
                    <div className='flex flex-col items-start justify-center gap-y-4 px-3'>
                        <h1 className='mb-2 text-xl font-palanquin font-semibold '>{product.productType}</h1>
                        <div className='flex items-center justify-center flex-wrap gap-5 max-sm:gap-3'>
                            {product.allProducts.map((allProduct) =>(
                            <ProductCard imgUrl={allProduct.imgUrl} price={allProduct.price} btnLabel={allProduct.btnLabel} productTag={allProduct.title} productType={allProduct.type}/>
                            ))}
                        </div>
                    </div>    
                ))}
                {/* new products */}

            </div>
        </section>
    )
}

export default Home
