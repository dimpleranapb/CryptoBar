import React from "react";
import { useCrypto } from "../CryptoContext";

export default function Watchlist() {
  const { watchList, symbol, deleteCoin,currency } = useCrypto();
  return (
    <div className="h-3/6 w-full p-2 bg-slate-900 overflow-y-auto mb-2  rounded-md">
      <p className="text-blue-700 font-semibold text-center my-1">Watchlist</p>
      {watchList ? (
        <div className="flex flex-col gap-2">
          {watchList.map((coin,i) => {
            return (
              <div className="w-full bg-[#002f6c] text-white flex justify-between p-2 rounded-md" key={i}>
                <span>{coin.name}</span>
                <span>
                  {symbol} &nbsp;{coin.price[currency]} &nbsp;
                  <button onClick={()=>deleteCoin(coin.name)}>
                    <i className="fa fa-trash-o"></i>
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
