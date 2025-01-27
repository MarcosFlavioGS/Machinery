'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { FunctionComponent } from 'react'

type ListingHeaderProps = {
  totalResults: number
  location: string
}

const ListingHeader: FunctionComponent<ListingHeaderProps> = ({
  totalResults,
  location
}: ListingHeaderProps) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-6'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
        {/* Results Information */}
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>{totalResults} resultados encontrados</h2>
          <div className='text-gray-600 text-sm'>
            Listando resultados em <Badge>{location}</Badge>
          </div>
        </div>

        {/* Sort Options */}
        <div className='mt-4 sm:mt-0'>
          <Select>
            <SelectTrigger className='w-48'>
              <SelectValue placeholder='Ordenar por' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='price-asc'>Menor preço</SelectItem>
              <SelectItem value='price-desc'>Maior preço</SelectItem>
              <SelectItem value='recent'>Mais recentes</SelectItem>
              <SelectItem value='relevance'>Relevância</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default ListingHeader
