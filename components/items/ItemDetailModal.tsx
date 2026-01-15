'use client';

import type { Item } from '@/lib/api/item';
import Image from 'next/image';

export const ItemDetailModal = ({
  item,
  onClose,
  onPurchase,
}: {
  item: Item;
  onClose: () => void;
  onPurchase: (item: Item) => void;
}) => {
  return (
    <div
      className='fixed inset-0 z-50 bg-black/40 p-4 flex justify-center items-center'
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className='mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-lg'>
        <div className='flex flex-col'>
          <div className='flex items-start justify-between gap-3 border-b border-black/10 p-4'>
            <div className='truncate text-base font-semibold'>{item.name}</div>
            <button
              type='button'
              className='rounded-md border border-black/10 px-2 py-1 text-sm hover:bg-black/5 cursor-pointer'
              onClick={onClose}
            >
              닫기
            </button>
          </div>
          <div className='flex-1 overflow-y-auto p-4'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='aspect-[4/3] overflow-hidden rounded-xl bg-black/5'>
                {item.image ? (
                  <Image src={item.image} alt={item.name} className='h-full w-full object-cover' loading='lazy' />
                ) : (
                  <div className='h-full w-full' />
                )}
              </div>
              <div className='min-w-0 flex flex-col justify-between'>
                <div>
                  <div className='text-lg font-semibold'>{item.price}</div>
                  <div className='mt-2 text-sm opacity-80'>
                    재고 {Math.max(item.current, 0)} / {item.limit}
                  </div>
                </div>
                <button
                  type='button'
                  className='mt-4 w-full rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/40 cursor-pointer'
                  onClick={() => onPurchase(item)}
                >
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
