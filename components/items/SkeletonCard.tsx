export const SkeletonCard = () => {
  return (
    <article className='rounded-2xl border border-black/10 p-3 shadow-sm'>
      <div className='skeleton aspect-[4/3] w-full' />
      <div className='mt-3 space-y-2'>
        <div className='skeleton h-4 w-3/4' />
        <div className='skeleton h-4 w-1/2' />
      </div>
      <div className='mt-4 skeleton h-4 w-2/3' />
    </article>
  );
};
