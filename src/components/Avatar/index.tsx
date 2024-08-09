import stringUtil from "@/utils/string.util";

export default function Avatar({ fullName }: { fullName: string }) {
  return (
    <div className='w-[40px] h-[40px] rounded-full bg-primary text-white flex items-center justify-center'>{stringUtil.getFirstChar(fullName)}</div>
  );
}
