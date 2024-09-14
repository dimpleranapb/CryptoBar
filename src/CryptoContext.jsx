import React, { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import axios from "axios";
import { CoinList } from "./config/api"; // Make sure this path is correct

const Crypto = createContext();

export default function CryptoProvider({ children }) {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [watchList, setWatchList] = useState([]);
  const [coins, setCoins] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  
  const [user, setUser] = useState(null);

  // Check if the user is logged in
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // Read WatchList Data
  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          setWatchList(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  // Currency symbol update
  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  // Fetch coins data
  const fetchCoinsData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setFilteredList(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coins list:", error);
      setError(true);
      setLoading(false);
    }
  };

  // Fetch coins data whenever currency changes
  useEffect(() => {
    fetchCoinsData();
  }, [currency]);

  // Add to watchList
  const addToWatchList = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(coinRef, {
        coins: watchList,
      });
    } catch (error) {
      console.error("Error updating watchlist:", error);
    }
  };

  // Delete Watchlist Item
  const deleteCoin = async (name) => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(coinRef, {
        coins: watchList.filter((coin) => coin.name !== name),
      });
      setWatchList(watchList.filter((coin) => coin.name !== name));
    } catch (error) {
      console.error("Error updating watchlist:", error);
    }
  };

  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        loading,
        setLoading,
        error,
        setError,
        user,
        setUser,
        watchList,
        setWatchList,
        addToWatchList,
        deleteCoin,
        coins,
        fetchCoinsData, 
        filteredList,
        setFilteredList
      }}
    >
      {children}
    </Crypto.Provider>
  );
}

// Custom Hook
export const useCrypto = () => {
  return useContext(Crypto);
};
