import { Button } from '@/components/ui/button';
import type { Product } from '@/mocks/products.mocks';
import { ChevronLeft, ChevronRight, Filter, Grid, List } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from './FilterSideBar';

interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products }: Props) => {
  return (
    <section className='py-12 px-4 lg:px-8'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center space-x-4'>
            <h2 className='text-3xl font-light'>Productos</h2>
            <span className='text-muted-foreground'>
              ({products.length} productos)
            </span>
          </div>

          <div className='flex items-center space-x-2'>
            <Button
              variant='outline'
              size='sm'
              //   onClick={() => setShowFilters(!showFilters)}
              className='lg:hidden'
            >
              <Filter className='h-4 w-4 mr-2' />
              Filtros
            </Button>

            <div className='hidden md:flex border rounded-md'>
              <Button
                // variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size='sm'
                // onClick={() => setViewMode('grid')}
                className='rounded-r-none'
              >
                <Grid className='h-4 w-4' />
              </Button>
              <Button
                // variant={viewMode === 'list' ? 'default' : 'ghost'}
                size='sm'
                // onClick={() => setViewMode('list')}
                className='rounded-l-none'
              >
                <List className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>

        <div className='flex gap-8'>
          {/* Filters Sidebar - Desktop */}
          <div className='hidden lg:block'>
            <FilterSidebar />
          </div>

          {/* Mobile Filters */}
          {/* {showFilters && (
            <div className='fixed inset-0 z-50 bg-background p-4 lg:hidden'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-lg font-semibold'>Filtros</h3>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setShowFilters(false)}
                >
                  Cerrar
                </Button>
              </div>
              <FilterSidebar />
            </div>
          )}
 */}
          {/* Products Grid */}
          <div className='flex-1'>
            <div
            //   className={
            //     viewMode === 'grid'
            //       ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            //       : 'space-y-4'
            //   }
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
