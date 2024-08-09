import SearchResultItem from "@/components/SearchResultItem";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import userService from "@/services/user.service";
import { User } from "@/types";
import { debounce } from "lodash";

export default function SearchNavInput() {
  const [keywords, setKeywords] = useState<string>("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const { t } = useTranslation();

  const search = useCallback(
    debounce(async (keywords: string) => {
      if (keywords.trim().length > 0) {
        try {
          const response = await userService.search(keywords);
          const { content } = response.data;
          setSearchResults(content);
        } catch (error) {
          console.error("Search error:", error);
        }
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    search(keywords);
  }, [keywords, search]);

  return (
    <>
      <div className='relative hidden md:flex items-center justify-end bg-[#F1F1F2] dark:bg-hoverDark p-1 rounded-full max-w-[500px] w-full group'>
        <input
          type='text'
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className='w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none'
          placeholder={t("search.input.placeholder")}
        />

        <div className='px-3 py-1 flex items-center border-l border-l-gray-300 cursor-pointer'>
          <Search color='#A1A2A7' size={20} onClick={() => search(keywords)} />
        </div>

        <div
          className={`absolute group-focus-within:block hidden rounded-md bg-white dark:bg-dark max-w-[910px] h-auto w-full z-20 left-0 top-12 border-none p-1`}>
          {searchResults.length > 0 ? (
            searchResults.map((profile) => <SearchResultItem key={profile._id} profile={profile} />)
          ) : (
            <p className='text-[14px] text-gray-500 text-center py-3'>{t("text.search.noResult")}</p>
          )}
        </div>
      </div>
    </>
  );
}
