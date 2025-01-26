import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import { products } from '@/app/products/productList'

type Props = {
  listName: string
}

export default function Featured(props: Props) {
  return (
    <section
      id='featured'
      className='py-16 bg-zinc-200'>
      <div className='container mx-auto px-4 '>
        <h2 className='text-4xl font-extrabold mb-12 text-gray-800'>{props.listName}</h2>
        <Carousel
          opts={{ align: 'start' }}
          className='w-full'>
          <CarouselContent>
            {products.map((item, idx) => (
              <CarouselItem
                key={idx}
                className='basis-full sm:basis-1/2 lg:basis-1/3 px-2'>
                <Card className='shadow-lg bg-zinc-300 rounded-lg hover:scale-105 transition-transform duration-200'>
                  <CardHeader className='p-0'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={360}
                      height={240}
                      className='rounded-t-lg object-cover w-full h-[240px]'
                    />
                  </CardHeader>
                  <CardContent className='p-6'>
                    <CardTitle className='text-xl font-bold text-gray-800'>{item.title}</CardTitle>
                    <br></br>
                    <p className='text-lg font-semibold text-gray-800'>{'R$' + item.price}</p>
                    <br></br>
                    <p className='text-lg font-semibold text-gray-800'>{item.description}</p>
                    <br></br>
                    <p className='text-lg font-semibold text-gray-800'>{'De: ' + item.vendor}</p>
                    <p className='text-lg font-semibold text-sky-800'>{item.local}</p>
                  </CardContent>
                  <CardFooter className='p-6'>
                    <Button className='w-full bg-red-500 text-white hover:bg-red-400'>Detalhes</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-sky-800 text-white p-3 rounded-full z-10 shadow-md hover:bg-sky-800 transition' />
          <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-sky-800 text-white p-3 rounded-full z-10 shadow-md hover:bg-sky-600 transition' />
        </Carousel>
      </div>
    </section>
  )
}
