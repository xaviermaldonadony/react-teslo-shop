import { Outlet } from 'react-router';
import { CustomHeader } from '../Components/CustomHeader';
import { CustomFooter } from '../Components/CustomFooter';

export const ShopLayout = () => {
  return (
    <div className='min-h-screen bg-background'>
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </div>
  );
};
