import React from 'react'

import ProductCard from '../../components/ProductCard'
import { homePageProducts } from '../../constant'

const Home = () => {
    return (
        <section className='max-container padding-x pt-4 pb-12'>
            <div className='flex items-center justify-center flex-wrap gap-5 max-sm:gap-4'>
                {/* card */}
                {homePageProducts.map((product) => (
                    <ProductCard imgUrl={product.imgUrl} price={product.price} btnLabel={product.btnLabel} productTag={product.title}/>
                ))}
                
            </div>
        </section>
    )
}

export default Home
