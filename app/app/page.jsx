'use client';

import { useEffect, useState } from 'react';
import getHexContract from '@/lib/hexContract';

const Page = () => {
  const [totalSupply, setTotalSupply] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    const hexContract = getHexContract();

    const fetchTotalSupply = async () => {
      const totalSupplyHex = await hexContract.methods.totalSupply().call();
      setTotalSupply(parseInt(totalSupplyHex));
      // console.log(dailyData);
    };
    const fetchCurrentDay = async () => {
      const currentDayHex = await hexContract.methods.currentDay().call();
      setCurrentDay(currentDayHex);
      console.log(currentDayHex);
    };

    fetchTotalSupply();
    fetchCurrentDay();
  }, []);

  return (
    <div>
      <h1>Hex Smart Contract</h1>
      {currentDay !== null ? <p>Day: {currentDay.toLocaleString()}</p> : <p>Loading day...</p>}
      {totalSupply !== null ? <p>Total Supply: {totalSupply.toLocaleString()} HEX</p> : <p>Loading total supply...</p>}
    </div>
  );
};

export default Page;
