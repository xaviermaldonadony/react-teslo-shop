import { Link } from 'react-router';
import { PencilIcon, PlusIcon } from 'lucide-react';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { currencyFormatter } from '@/lib/currency-formatter';
import { useProducts } from '@/shop/hooks/useProducts';

export const AdminProductsPage = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <AdminTitle title='Products' subTitle='View and manage all products' />
        <div className='flex justify-end mb-10 gap-4'>
          <Link to='/admin/products/new'>
            <Button className='bg-blue-500 hover:bg-blue-600 text-white'>
              <PlusIcon />
              New Product
            </Button>
          </Link>
        </div>
      </div>
      <Table className='bg-white p-10 shadow-xs border border-gray-200 mb-10'>
        <TableHeader>
          <TableRow>
            {/* <TableHead className='w-[100px]'>ID</TableHead> */}
            <TableHead>Images</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Inventory</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.products.map((product) => (
            <TableRow key={product.id}>
              {/* <TableCell className='font-medium'>1</TableCell> */}
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className='w-20 h-20 object-cover rounded-md'
                />
              </TableCell>
              <TableCell>
                <Link
                  to={`/admin/products/${product.id}`}
                  className='hover:text-blue-500 underline'
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell>{currencyFormatter(product.price)}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sizes.join(', ')}</TableCell>
              <TableCell className='text-right'>
                <Link to={`/admin/products/${product.id}`}>
                  <PencilIcon className='w-4 h-4 text-blue-500' />
                </Link>
              </TableCell>
            </TableRow>
          ))}
          {/* {invoices.map((invoice) => (
          ))} */}
        </TableBody>
      </Table>
      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
