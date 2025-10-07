import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef, type KeyboardEvent } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { cn } from '@/lib/utils';

export const CustomHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { gender } = useParams();
  console.log(gender);

  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get('query') || '';

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    const query = inputRef.current?.value;
    const newSerachParams = new URLSearchParams();

    if (!query) {
      newSerachParams.delete('query');
    } else {
      newSerachParams.set('query', inputRef.current!.value);
    }

    setSearchParams(newSerachParams);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <Menu className='h-5 w-5' />
            </Button>
            <h1 className='text-xl font-semibold tracking-tight'>
              TESLo STYLE
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              to='/'
              // className={`text-sm font-medium transition-colors hover:text-primary`}
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                !gender ? 'underline underline-offset-4' : ''
              )}
            >
              Products
            </Link>
            <Link
              to='/gender/men'
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                gender === 'men' ? 'underline underline-offset-4' : ''
              )}
            >
              Men
            </Link>
            <Link
              to='/gender/women'
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                gender === 'women' ? 'underline underline-offset-4' : ''
              )}
            >
              Women
            </Link>
            <Link
              to='/gender/kid'
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                gender === 'kid' ? 'underline underline-offset-4' : ''
              )}
            >
              Kids
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className='flex items-center space-x-4'>
            <div className='hidden md:flex items-center space-x-2'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                <Input
                  ref={inputRef}
                  placeholder='Search products...'
                  className='pl-9 w-64 h-9'
                  onKeyDown={handleSearch}
                  defaultValue={query}
                />
              </div>
            </div>

            <Button variant='ghost' size='icon' className='md:hidden'>
              <Search className='h-5 w-5' />
            </Button>

            <Link to='/auth/login'>
              <Button variant='default' size='sm' className='ml-2'>
                Login
              </Button>
            </Link>
            <Link to='/admin'>
              <Button variant='destructive' size='sm' className='ml-2'>
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
