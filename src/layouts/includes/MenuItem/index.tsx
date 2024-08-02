import { useTranslation } from "react-i18next";
import { IconType } from "@/types";

export default function MenuItem({ title, icon, isCurrentPage }: { title: string; icon: IconType; isCurrentPage: boolean }) {
  const { t } = useTranslation();
  const Icon = icon;

  return (
    <>
      <div className='flex items-center hover:bg-gray-100 p-[12px]'>
        <Icon strokeWidth={2.5} size={26} color={isCurrentPage ? "#fe2c55" : "#000000"} />
        <p className={`lg:block hidden pl-[12px] mt-0.5 font-bold text-[17px] ${isCurrentPage ? "text-primary" : "text-black"}`}>{t(title)}</p>
      </div>
    </>
  );
}
