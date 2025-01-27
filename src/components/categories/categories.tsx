'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FunctionComponent, useState } from 'react'

const categories = [
  { id: 1, name: 'Escavadeiras', icon: '🚜' },
  { id: 2, name: 'Guindastes', icon: '🏗️' },
  { id: 3, name: 'Tratores', icon: '🚜' },
  { id: 4, name: 'Empilhadeiras', icon: '🛒' },
  { id: 5, name: 'Carregadeiras', icon: '⚙️' },
  { id: 6, name: 'Retroescavadeiras', icon: '🔧' }
]

const Categories: FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  return (
    <div className='flex justify-center py-6 bg-gray-50'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl'>
        {categories.map((category) => (
          <Card
            key={category.id}
            className={`p-4 cursor-pointer transition-all ${
              selectedCategory === category.id ? 'bg-blue-100 border-blue-500' : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}>
            <CardContent className='flex flex-col items-center text-center'>
              <span className='text-2xl mb-2'>{category.icon}</span>
              <p className='text-sm font-medium'>{category.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Categories
