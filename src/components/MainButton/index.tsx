export default function MainButton({ text }: { text: string }) {
  return (
    <button className='rounded-small border-none bg-primary text-white font-semibold user-select-none min-w-[96px] flex items-center justify-center h-[36px] min-h-[28px] cursor-pointer'>
      {text}
    </button>
  );
}
