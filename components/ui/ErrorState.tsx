export const ErrorState = ({
  title = '데이터를 불러오지 못했어요.',
  message,
  onRetry,
}: {
  title?: string;
  message: string;
  onRetry: () => void;
}) => {
  return (
    <div className='rounded-xl border border-black/10 bg-white p-4 text-black'>
      <div className='text-base font-semibold'>{title}</div>
      <p className='mt-2 text-sm opacity-80 break-words'>{message}</p>
      <div className='mt-4'>
        <button
          type='button'
          className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:opacity-80 cursor-pointer'
          onClick={onRetry}
        >
          다시 시도
        </button>
      </div>
    </div>
  );
};
