import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";


const Search = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
        <MagnifyingGlassIcon className="w-4" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="font-sans w-96 pl-10 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400"
      />
     
    </div>
  );
};

export default Search;
