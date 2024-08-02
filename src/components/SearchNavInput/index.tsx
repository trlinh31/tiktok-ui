import SearchResultItem from "@/components/SearchResultItem";
import { Search } from "lucide-react";
import { Profile } from "@/data/profile";
import { useTranslation } from "react-i18next";

export default function SearchNavInput() {
  const { t } = useTranslation();

  return (
    <>
      <div className='relative hidden md:flex items-center justify-end bg-[#F1F1F2] p-1 rounded-full max-w-[500px] w-full group'>
        <input
          type='text'
          className='w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none'
          placeholder={t("search.input.placeholder")}
        />

        <div className='px-3 py-1 flex items-center border-l border-l-gray-300 cursor-pointer'>
          <Search color='#A1A2A7' size={20} />
        </div>

        <div className='absolute hidden group-focus-within:block rounded-md bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1'>
          <SearchResultItem profile={Profile} />
          <SearchResultItem profile={Profile} />
        </div>
      </div>
    </>
  );
}
