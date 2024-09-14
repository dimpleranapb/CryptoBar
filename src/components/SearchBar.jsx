import React, { useState } from "react";
import { useCrypto } from "../CryptoContext";

export default function SearchBar() {
  const {coins,setFilteredList} = useCrypto()

  const searchHandler = (e) => {
    let searchResult = coins.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
   setFilteredList(searchResult);
  };
  return (
    <div className="px-7 m-2">
      <input
        onChange={searchHandler}
        className="bg-transparent h-12 text-white px-2 w-full border border-gray-400 focus:border-gray-300 placeholder-gray-400"
        placeholder="Search for Cryptocurrency"
      />
    </div>
  );
}
