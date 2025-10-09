import { AdminTitle } from '@/admin/components/AdminTitle';
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
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export const AdminProductsPage = () => {
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
            <TableHead className='w-[100px]'>ID</TableHead>
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
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>
                <img
                  src=''
                  alt='product'
                  className='w-20 h-20 object-cover rounded-md'
                />
              </TableCell>
              <TableCell>Product 1</TableCell>
              <TableCell>250.00</TableCell>
              <TableCell>100 items</TableCell>
              <TableCell>Category 1</TableCell>
              <TableCell>XS,S, L</TableCell>
              <TableCell className='text-right'>
                <Link to={`/admin/products/t-shirt-teslo`}>Edit</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomPagination totalPages={10} />
    </>
  );
};
