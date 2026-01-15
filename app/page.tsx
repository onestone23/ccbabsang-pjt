'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';

import type { Item } from '@/lib/api/item';
import { fetchItems, sortAndGroupItems } from '@/lib/api/item';

const Page = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchItems()
      .then((data) => {
        if (cancelled) return;
        const { activateItems, soldOutItems } = sortAndGroupItems(data);
        const newItems = [...activateItems, ...soldOutItems];
        setItems(newItems);
        setIsLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error(err);
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했어요.');
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
};

export default Page;
