'use client'

import ListingOptionsSheet from '@/components/listingSheet/listingOptionSheet'
import NavBar from '@/components/navBar/navBar'
import Footer from '@/components/footer/footer'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ListingHeader from '@/components/listingHeader/listingheader'

import { products, Product } from '@/app/products/productList'
import { FunctionComponent } from 'react'

const ProductCard = (product: Product) => (
  <Card className='w-full md:w-1/3 lg:w-1/4 p-2'>
    <CardHeader>
      <h3 className='text-lg font-bold truncate'>{product.title}</h3>
    </CardHeader>
    <CardContent>
      <img
        src={product.image}
        alt={product.title}
        className='w-full h-40 object-cover rounded-lg'
      />
      <p className='text-lg font-semibold text-gray-800'>{'R$' + product.price}</p>
      <br></br>
      <p className='text-lg font-semibold text-gray-800'>{product.description}</p>
      <br></br>
      <p className='text-lg font-semibold text-gray-800'>{'De: ' + product.vendor}</p>
      <p className='text-lg font-semibold text-sky-800'>{product.local}</p>
    </CardContent>
    <CardFooter className='p-6'>
      <Button className='w-full bg-red-500 text-white hover:bg-red-400'>Detalhes</Button>
    </CardFooter>
  </Card>
)

type Props = {
  products: Product[]
}

const ProductList: FunctionComponent<Props> = ({ products }: { products: Product[] }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 px-4 py-6'>
      {products.map((product, index) => (
        <ProductCard
          key={`${product.title}-${index}`}
          {...product}
        />
      ))}
    </div>
  )
}

const SearchPage: FunctionComponent = () => {
  return (
    <div className='min-h-screen bg-zinc-200'>
      <NavBar />

      {/* Listing Options */}
      <ListingOptionsSheet />

      {/* Listing header */}
      <ListingHeader
        totalResults={products.length}
        location='São Paulo, SP'
      />

      {/* Product List */}
      <ProductList products={products} />

      {/* Footer section */}
      <Footer />
    </div>
  )
}

export default SearchPage
