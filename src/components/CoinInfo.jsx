import React from "react";
import { useCrypto } from "../CryptoContext";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { formatToMillions } from "../utils/formatter";
import parse from "html-react-parser"


export default function CoinInfo({ coin }) {
  const { symbol, currency, user, watchList, deleteCoin } = useCrypto();

  // Notifications
  const watchListNotify = (message) => toast(message);
  const loginNotify = () => toast("You need to Login First");

  // Adding coin to Wishlist
  const addToWatchList = async () => {
    if (
      !coin ||
      !coin.name ||
      !coin.market_data ||
      !coin.market_data.current_price
    ) {
      watchListNotify("Error: Invalid coin data.");
      return;
    }

    const coinRef = doc(db, "watchlist", user.uid);

    try {
      // Create a new watchlist array with the added coin
      const updatedWatchList = [
        ...(watchList || []),
        {
          name: coin.name,
          price: {
            USD: coin.market_data.current_price.usd,
            INR: coin.market_data.current_price.inr,
          },
        },
      ];

      await setDoc(coinRef, { coins: updatedWatchList }, { merge: true });
      watchListNotify("Coin Added to the Watchlist!");
    } catch (error) {
      watchListNotify(
        "Error: " + (error.message || "An unknown error occurred.")
      );
    }
  };

  // Check if Wishlist Already contains coin
  const isInWishlist = () => {
    return watchList.some((item) => item.name === coin.name);
  };

  // Add to Wishlist button Handler
  const watchListHandler = () => {
    user ? addToWatchList() : loginNotify();
  };

  return coin ? (
    <div className="flex flex-col items-center justify-center px-3 w-full lg:w-1/4 h-[90vh] lg:h-screen lg:border-r-2 border-gray-500 border-b-2 lg:border-b-0">
      <img className="h-48" src={coin.image.large} alt={coin.name} />
      <div className="flex flex-col gap-3">
        <h2 className="text-5xl text-white font-bold self-center">
          {coin.name}
        </h2>
        <p className="text-white my-4">{parse(coin.description.en.split(".")[0])}.</p>
        <div>
          <span className="text-2xl text-white font-bold">
            RANK:&nbsp;&nbsp;
          </span>
          <span className="text-2xl font-light text-white">
            {coin.market_cap_rank}
          </span>
        </div>
        <div>
          <span className="text-2xl text-white font-bold">
            Current Price:&nbsp;&nbsp;
          </span>
          <span className="text-2xl font-light text-white">
            {symbol}
            {currency === "INR"
              ? coin.market_data.current_price.inr
              : coin.market_data.current_price.usd}
          </span>
        </div>
        <div>
          <span className="text-2xl text-white font-bold">
            Market Cap:&nbsp;&nbsp;
          </span>
          <span className="text-2xl font-light text-white">
            {symbol}
            {currency === "INR"
              ?  formatToMillions(coin.market_data.market_cap.inr)
              :  formatToMillions(coin.market_data.market_cap.usd)}
          </span>
        </div>
        {isInWishlist() ? (
          <button
            className="w-full bg-red-600 text-white rounded-md p-1 hover:bg-red-900"
            onClick={() => deleteCoin(coin.name)}
          >
            Remove From WISHLIST
          </button>
        ) : (
          <button
            className="w-full bg-blue-600 text-white rounded-md p-1 hover:bg-blue-800"
            onClick={watchListHandler}
          >
            ADD TO WISHLIST
          </button>
        )}
      </div>
    </div>
  ) : null;
}
