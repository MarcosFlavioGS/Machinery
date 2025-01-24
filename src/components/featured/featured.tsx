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

export default function Featured() {
  const items = [
    { title: 'MARAIS SMC 200 R', price: '$25,000', image: '/MARAIS SMC 200 R.png' },
    { title: 'Bulldozer XT200', price: '$35,000', image: '/bulldozer.png' },
    { title: 'Komatsu PC210-LC', price: '$50,000', image: '/Komatsu PC210-LC.png' },
    { title: 'Loader Pro XL', price: '$40,000', image: '/bulldozer.png' },
    { title: 'DrillMaster 500', price: '$60,000', image: '/bulldozer.png' },
    { title: 'Loader Pro XL', price: '$40,000', image: '/bulldozer.png' },
    { title: 'DrillMaster 500', price: '$40,000', image: '/bulldozer.png' },
    { title: 'Komatsu PC210-LC', price: '$40,000', image: '/MARAIS SMC 200 R.png' }
  ]

  return (
    <section
      id='featured'
      className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-extrabold text-center mb-12 text-gray-800'>Featured Listings</h2>
        <Carousel
          opts={{ align: 'start' }}
          className='w-full'>
          <CarouselContent>
            {items.map((item, idx) => (
              <CarouselItem
                key={idx}
                className='basis-full sm:basis-1/2 lg:basis-1/3 px-2'>
                <Card className='shadow-lg rounded-lg hover:scale-105 transition-transform duration-200'>
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
                    <p className='text-lg font-semibold text-blue-600'>{item.price}</p>
                  </CardContent>
                  <CardFooter className='p-6'>
                    <Button className='w-full bg-blue-600 text-white hover:bg-blue-700'>View Details</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full z-10 shadow-md hover:bg-blue-700 transition' />
          <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full z-10 shadow-md hover:bg-blue-700 transition' />
        </Carousel>
      </div>
    </section>
  )
}
