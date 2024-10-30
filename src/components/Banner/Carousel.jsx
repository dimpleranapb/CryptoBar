import axios from "axios";
import React, { useState, useEffect } from "react";
import { TrendingCoins } from "../../config/api";
import { useCrypto } from "../../CryptoContext";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Ensure you import the CSS for AliceCarousel
import { SyncLoader } from "react-spinners";

export default function Carousel() {
  const { currency, symbol, loading, setLoading } = useCrypto();
  const [trending, setTrending] = useState([]); // Initialize as an empty array

  const fetchTrendingCoins = async (currency) => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  //Profit or loss
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  useEffect(() => {
    fetchTrendingCoins(currency);
  }, [currency]);

  const items = trending.map((coin) => (
    <Link
      key={coin.id}
      to={`/coin/${coin.id}`}
      className="text-white flex flex-col items-center justify-center"
    >
      <img className="mb-2 h-20 hover:scale-105" src={coin.image} alt={coin.name} />
      <span>
        {coin.symbol}&nbsp;
        {coin.price_change_percentage_24h >= 0 ? (
          <p className="text-green-600 inline">
            +{coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600 inline ">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </span>
      <span className="font-normal text-xl">
        {symbol}&nbsp;{coin.current_price}
      </span>
      &nbsp;
    </Link>
  ));

  return loading ? (
    <div className="h-1/2 flex items-center justify-center">
      <SyncLoader color="#1E90FF" />
    </div>
  ) : (
    <div className="h-1/2 flex items-center justify-center py-6">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  ); 
}
