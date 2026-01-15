import type { Item } from '@/lib/api/item';

import { ItemCard } from './ItemCard';
import { SkeletonCard } from './SkeletonCard';

export const ItemsGrid = ({
  items,
  isLoading,
  skeletonCount = 12,
  onItemClick,
}: {
  items: Item[];
  isLoading: boolean;
  skeletonCount?: number;
  onItemClick: (item: Item) => void;
}) => {
  return (
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
      {isLoading && items.length === 0
        ? Array.from({ length: skeletonCount }).map((_, i) => <SkeletonCard key={i} />)
        : items.map((item) => <ItemCard key={item.index} item={item} onClick={onItemClick} />)}
    </div>
  );
};
