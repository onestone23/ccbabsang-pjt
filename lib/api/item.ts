export type Item = {
  current: number;
  image: string | null;
  index: number;
  limit: number;
  name: string;
  price: string;
};

export type ItemResponse = {
  content: Item[];
  status: number;
};

export const fetchItems = async (): Promise<Item[]> => {
  const res = await fetch('https://api.zeri.pics', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`API 요청 실패 Code: ${res.status}`);
  const data = (await res.json()) as ItemResponse;
  return Array.isArray(data.content) ? data.content : [];
};

export const sortAndGroupItems = (items: Item[]) => {
  const soldOutItems: Item[] = [];
  const activateItems: Item[] = [];

  for (const item of items) {
    if (item.current <= 0) soldOutItems.push(item);
    else activateItems.push(item);
  }

  activateItems.sort((a, b) => a.index - b.index);
  soldOutItems.sort((a, b) => a.index - b.index);

  return { activateItems, soldOutItems };
};
