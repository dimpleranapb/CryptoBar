import React from "react";
import { useCrypto } from "../CryptoContext";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { useState } from "react";
import { formatToMillions } from "../utils/formatter";

export default function CoinsTable() {
  const { coins, symbol, filteredList } = useCrypto();
  const navigate = useNavigate();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const indexOfLastCoin = currentPage * itemsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - itemsPerPage;

  const currentCoins = filteredList.slice(indexOfFirstCoin, indexOfLastCoin);

  const handleRowClick = (coinId) => {
    navigate(`/coin/${coinId}`);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="bg-transparent p-7 flex items-center justify-center flex-col w-full">
      <h2 className="text-white text-xl md:text-4xl font-bold mt-[-20px] mb-4">MARKET UPDATES</h2>
      {/* Scrollable container for the table */}
      <div className="w-full overflow-x-auto">
        <table className="text-white w-full min-w-full border-collapse">
          <thead>
            <tr className="bg-custom-table-heading h-11">
              <th className="p-2 sm:p-4 text-left">COIN</th>
              <th className="p-2 sm:p-4 text-right">PRICE</th>
              <th className="p-2 sm:p-4 text-right">24H CHANGE</th>
              <th className="p-2 sm:p-4 text-right">MARKET CAP</th>
            </tr>
          </thead>
          <tbody>
            {currentCoins.map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-gray-700 align-middle cursor-pointer hover:bg-blue-900"
                onClick={() => handleRowClick(coin.id)} // Make the row clickable
              >
                <td>
                  <div className="flex items-center p-2 sm:p-4">
                    <img
                      className="h-8 sm:h-12 inline mr-2 sm:mr-3"
                      src={coin.image}
                      alt={coin.name}
                    />
                    <div className="flex flex-col">
                      <span className="uppercase font-bold text-sm sm:text-base">
                        {coin.symbol}
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {coin.name}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-2 sm:p-4 text-right">
                  {symbol}&nbsp;{coin.current_price}
                </td>
                <td className="p-2 sm:p-4 text-right">
                  {coin.price_change_percentage_24h >= 0 ? (
                    <p className="text-green-500 inline">
                      +{coin.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  ) : (
                    <p className="text-red-500 inline ">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  )}
                </td>
                <td className="p-2 sm:p-4 text-right">
                  {symbol}&nbsp; {formatToMillions(coin.market_cap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
