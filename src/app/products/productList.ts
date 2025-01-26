export type Product = {
  title: string
  price: string
  image: string
  vendor: string
  local: string
  description: string
}

export const products: Product[] = [
  {
    title: 'MARAIS SMC 200 R',
    price: '25.000',
    image: '/MARAIS SMC 200 R.png',
    vendor: 'Cleiton',
    local: '📍 São Paulo, SP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris.'
  },
  {
    title: 'Bulldozer XT200',
    price: '35.000',
    image: '/bulldozer.png',
    vendor: 'Mohamed',
    local: '📍 São Paulo, SP',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit molestie risus, sit amet sodales.'
  },
  {
    title: 'Komatsu PC210-LC',
    price: '50.000',
    image: '/Komatsu PC210-LC.png',
    vendor: 'Brunno',
    local: '📍 São Paulo, SP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, sit amet sodales.'
  },
  {
    title: 'Loader Pro XL',
    price: '40.000',
    image: '/bulldozer.png',
    vendor: 'Matheus',
    local: '📍 São Paulo, SP',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ornare leo, feugiat mattis nunc.'
  },
  {
    title: 'DrillMaster 500',
    price: '60.000',
    image: '/bulldozer.png',
    vendor: 'Luiz',
    local: '📍 São Paulo, SP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit molestie .'
  },
  {
    title: 'Loader Pro XL',
    price: '40.000',
    image: '/bulldozer.png',
    vendor: 'Marcos',
    local: '📍 São Paulo, SP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ornare leo.'
  },
  {
    title: 'DrillMaster 500',
    price: '40.000',
    image: '/bulldozer.png',
    vendor: 'Celso',
    local: '📍 São Paulo, SP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis venenatis interdum.'
  },
  {
    title: 'Komatsu PC210-LC',
    price: '40.000',
    image: '/MARAIS SMC 200 R.png',
    vendor: 'Carlos',
    local: '📍 São Paulo, SP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit molestie risus.'
  }
]
