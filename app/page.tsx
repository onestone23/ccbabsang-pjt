'use client';

import Image from 'next/image';

import { ItemsGrid } from '@/components/items/ItemsGrid';
import { ErrorState } from '@/components/ui/ErrorState';
import { useItems } from '@/lib/hooks/useItems';

const Page = () => {
  const { items, isLoading, error, refetch } = useItems();

  return (
    <main className='min-h-screen bg-white text-black'>
      <header className='sticky top-0 z-10 border-b border-black/10 bg-white/80 backdrop-blur'>
        <div className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4'>
          <div className='flex min-w-0 items-center gap-3'>
            <Image
              src='/image/logo.jpeg'
              alt='척척밥상 로고'
              width={40}
              height={40}
              className='h-10 w-10 rounded-md object-cover'
              priority
            />
            <div className='min-w-0'>
              <div className='truncate text-base font-semibold'>척척밥상</div>
              {items.length > 0 && <div className='mt-1 text-sm opacity-70'>상품: {items.length}개</div>}
            </div>
          </div>
        </div>
      </header>

      <section className='mx-auto max-w-6xl px-4 py-6' aria-label='상품 목록'>
        {error ? <ErrorState message={error} onRetry={refetch} /> : <ItemsGrid items={items} isLoading={isLoading} />}
      </section>
    </main>
  );
};

export default Page;
