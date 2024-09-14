import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCrypto } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import CoinGraph from "../components/CoinGraph";
import { SyncLoader } from "react-spinners";

export default function CoinPage() {
  const [coin, setCoin] = useState();
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { loading, setLoading } = useCrypto();

  const fetchCoin = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch coin data. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  if (loading) {
    <div className="p-5 flex flex-col lg:flex-row bg-custom-dark items-center justify-center">
      return <SyncLoader />;
    </div>;
  }

  if (error) {
    return (
      <div className="text-white h-screen w-full flex justify-center items-center flex-col">
        <h2>{error} </h2>
      </div>
    );
  }

  return (
    <div className="p-5 flex flex-col lg:flex-row bg-custom-dark items-center justify-center">
      <>
        <CoinInfo coin={coin} />
        <CoinGraph coin={coin} />
      </>
    </div>
  );
}
