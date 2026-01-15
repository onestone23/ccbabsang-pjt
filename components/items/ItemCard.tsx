import type { Item } from '@/lib/api/item';
import Image from 'next/image';

export const ItemCard = ({ item, onClick }: { item: Item; onClick: (item: Item) => void }) => {
  const isSoldOut = item.current <= 0;

  const handleClick = () => {
    if (isSoldOut) return;
    onClick(item);
  };

  return (
    <article
      className={[
        'rounded-2xl border p-3 shadow-sm transition border-black/10',
        isSoldOut ? 'cursor-not-allowed bg-gray-100 text-gray-500' : 'cursor-pointer bg-white hover:shadow-md',
      ].join(' ')}
      onClick={handleClick}
    >
      <div className='relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/5'>
        {item.image ? (
          <Image src={item.image} alt={item.name} className='h-full w-full object-cover' loading='lazy' />
        ) : (
          <div className='h-full w-full' />
        )}
        {isSoldOut ? (
          <div className='absolute inset-x-3 bottom-3'>
            <span className='rounded-full bg-gray-700/90 px-2.5 py-1 text-xs font-semibold text-white'>품절</span>
          </div>
        ) : null}
      </div>

      <div className='mt-3 min-w-0'>
        <div className='truncate text-sm font-semibold'>{item.name}</div>
        <div className='mt-1 text-sm font-medium opacity-80'>{item.price}</div>
        <div className='mt-2 text-xs opacity-70'>
          재고 {Math.max(item.current, 0)} / {item.limit}
        </div>
      </div>
    </article>
  );
};
