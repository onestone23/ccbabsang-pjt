import { useCallback, useEffect, useState } from 'react';

import type { Item } from '@/lib/api/item';
import { fetchItems, sortAndGroupItems } from '@/lib/api/item';

export type UseItemsResult = {
  items: Item[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
};

export function useItems(): UseItemsResult {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const applyItems = (data: Item[]) => {
    const { activateItems, soldOutItems } = sortAndGroupItems(data);
    setItems([...activateItems, ...soldOutItems]);
  };

  const applyError = (err: unknown) => {
    setError(err instanceof Error ? err.message : '오류가 발생했어요.');
  };

  const loadItems = useCallback((shouldIgnore: () => boolean) => {
    fetchItems()
      .then((data) => {
        if (shouldIgnore()) return;
        applyItems(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (shouldIgnore()) return;
        applyError(err);
        setIsLoading(false);
      });
  }, []);

  const refetch = useCallback(() => {
    setIsLoading(true);
    setError(null);
    loadItems(() => false);
  }, [loadItems]);

  useEffect(() => {
    let cancelled = false;
    loadItems(() => cancelled);

    return () => {
      cancelled = true;
    };
  }, [loadItems]);

  return { items, isLoading, error, refetch };
}
