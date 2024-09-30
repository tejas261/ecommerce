import Filters from '@/components/Filters'
import ProductListing from '@/components/ProductListing'
import React from 'react'

const OnSale = () => {
  return (
    <section className='flex m-10 gap-3'>
      <Filters/>
      <ProductListing type={"Casual"}/>
    </section>
  )
}

export default OnSale
