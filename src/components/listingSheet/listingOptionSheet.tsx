'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'

export default function ListingOptionsSheet() {
  const categories = [
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
    'Categoria 4',
    'Categoria 5',
    'Categoria 6'
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className='bg-blue-700 text-white hover:bg-blue-800'
          variant='outline'>
          Expandir
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Categorias</SheetTitle>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='flex items-center space-x-4'>
              <input
                type='checkbox'
                id={`category-${index}`}
                className='form-checkbox h-5 w-5 text-blue-600'
              />
              <Label
                htmlFor={`category-${index}`}
                className='text-lg'>
                {category}
              </Label>
            </div>
          ))}
        </div>
        <SheetFooter className='flex justify-end'>
          <SheetClose asChild>
            <Button className='bg-green-600 text-white hover:bg-green-700'>Salvar escolhas</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
