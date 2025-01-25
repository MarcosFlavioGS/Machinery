'use client'

import ListingOptionsSheet from '@/components/listingSheet/listingOptionSheet'
import NavBar from '@/components/navBar/navBar'
import Footer from '@/components/footer/footer'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Product = {
  title: string
  price: string
  image: string
  vendor: string
  local: string
}

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
      <p className='text-lg font-semibold text-gray-800'>{product.price}</p>
      <p className=''></p>
      <p className='text-lg font-semibold text-gray-800'>{'De: ' + product.vendor}</p>
      <p className='text-lg font-semibold text-sky-800'>{product.local}</p>
    </CardContent>
    <CardFooter className='p-6'>
      <Button className='w-full bg-red-500 text-white hover:bg-red-400'>View Details</Button>
    </CardFooter>
  </Card>
)

const ProductList = ({ products }: { products: Product[] }) => {
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

export default function SearchPage() {
  const products: Product[] = [
    {
      title: 'MARAIS SMC 200 R',
      price: 'R$25,000',
      image: '/MARAIS SMC 200 R.png',
      vendor: 'Cleiton',
      local: '📍 São Paulo, SP'
    },
    {
      title: 'Bulldozer XT200',
      price: 'R$35,000',
      image: '/bulldozer.png',
      vendor: 'Mohamed',
      local: '📍 São Paulo, SP'
    },
    {
      title: 'Komatsu PC210-LC',
      price: 'R$50,000',
      image: '/Komatsu PC210-LC.png',
      vendor: 'Brunno',
      local: '📍 São Paulo, SP'
    },
    {
      title: 'Loader Pro XL',
      price: 'R$40,000',
      image: '/bulldozer.png',
      vendor: 'Matheus',
      local: '📍 São Paulo, SP'
    },
    {
      title: 'DrillMaster 500',
      price: 'R$60,000',
      image: '/bulldozer.png',
      vendor: 'Luiz',
      local: '📍 São Paulo, SP'
    },
    {
      title: 'Loader Pro XL',
      price: 'R$40,000',
      image: '/bulldozer.png',
      vendor: 'Marcos',
      local: '📍 São Paulo, SP'
    },
    {
      title: 'DrillMaster 500',
      price: 'R$40,000',
      image: '/bulldozer.png',
      vendor: 'Celso',
      local: '📍 São Paulo, SP'
    },
    {
      title: 'Komatsu PC210-LC',
      price: 'R$40,000',
      image: '/MARAIS SMC 200 R.png',
      vendor: 'Carlos',
      local: '📍 São Paulo, SP'
    }
  ]

  return (
    <div className='min-h-screen bg-zinc-200'>
      <NavBar />

      {/* Listing Options */}
      <ListingOptionsSheet />

      {/* Product List */}
      <ProductList products={products} />

      {/* Footer section */}
      <Footer />
    </div>
  )
}
