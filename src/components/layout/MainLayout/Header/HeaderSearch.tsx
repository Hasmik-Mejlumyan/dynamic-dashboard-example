import { Search } from 'lucide-react';

const HeaderSearch = () => {
  return (
    <form className="max-w-[13.875rem] w-full relative">
      <input
        className="bg-header-search-background w-full py-1.5 pl-5 pr-10 rounded-3xl outline-none"
        placeholder="Search..."
        type="text"
      />
      <Search className="absolute top-1/2 -translate-y-1/2 right-4 size-4" />
    </form>
  );
};

export default HeaderSearch;
