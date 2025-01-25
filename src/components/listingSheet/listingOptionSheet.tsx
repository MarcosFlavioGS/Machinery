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
          className='bg-sky-700 text-white hover:bg-sky-800 hover:text-gray-200 fixed top-[300] left-1'
          variant='outline'>
          ⇄
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
                className='form-checkbox h-5 w-5 text-sky-600'
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
            <Button className='bg-sky-600 text-white hover:bg-sky-700 hove:text-gray-200'>
              Salvar escolhas
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
