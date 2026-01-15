'use client';

import { useEffect } from 'react';

import { fetchItems } from '@/lib/api/item';

const Page = () => {
  useEffect(() => {
    let cancelled = false;

    fetchItems()
      .then((data) => {
        if (cancelled) return;
        console.log('items:', data);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
};

export default Page;
