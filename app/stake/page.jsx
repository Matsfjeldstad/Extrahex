'use client';

import { useEffect, useState } from 'react';
import getHexContract from '@/lib/hexContract';
import { connectWallet } from '@/lib/connectWallet';
import getHexUsdPrice from '@/lib/uniswapApiData';
import getWeb3 from '@/lib/web3';

const web3 = getWeb3();

const Page = () => {
  const [totalSupply, setTotalSupply] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [userHexBalance, setUserHexBalance] = useState(null);
  const [userStakes, setUserStakes] = useState([]);
  const [hexPrice, setHexPrice] = useState(0);

  const hexContract = getHexContract();

  useEffect(() => {
    const fetchHexPrice = async () => {
      const hexPrice = await getHexUsdPrice();
      console.log(hexPrice);
      setHexPrice(Number(hexPrice));
    };

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

    fetchHexPrice();
    fetchTotalSupply();
    fetchCurrentDay();
  }, []);

  async function getStakeYield(stakerAddress, stakeIndex) {
    // Fetch stake data
    const stakeData = await hexContract.methods.stakeLists(stakerAddress, stakeIndex).call();

    // Check if the stake has been ended
    if (stakeData.stakeId === '0') {
      console.log('Stake not found or has been ended');
      return;
    }

    // Calculate the stake's payout
    const stakingDays = stakeData.stakedDays;
    const stakeEndDay = parseInt(stakeData.lockedDay) + parseInt(stakingDays);
    console.log('stakeEndDay:', stakeEndDay);
    const currentDay = await hexContract.methods.currentDay().call();
    console.log('currentDay:', currentDay);
    const servedDays = Math.min(currentDay, stakeEndDay) - stakeData.lockedDay;
    console.log('servedDays:', servedDays);

    // const stakeShares = stakeData.stakeShares;
    // console.log('stakeShares:', stakeShares);

    // Make sure the range is valid
    if (servedDays <= 0) {
      console.log("The stake hasn't started earning yield yet.");
      return;
    }

    const dailyDataArray = await hexContract.methods.dailyDataRange(stakeData.lockedDay, servedDays).call();

    let payout = 0;
    for (const dailyDataPacked of dailyDataArray) {
      const dailyData = web3.eth.abi.decodeParameters(
        [
          { type: 'uint72', name: 'dayPayoutTotal' },
          { type: 'uint72', name: 'dayStakeSharesTotal' },
          { type: 'uint56', name: 'dayUnclaimedSatoshisTotal' },
        ],
        dailyDataPacked,
      );

      const payoutPerShare =
        parseFloat(web3.utils.fromWei(dailyData.dayPayoutTotal)) /
        parseFloat(web3.utils.fromWei(dailyData.dayStakeSharesTotal));
      payout += parseFloat(stakeShares) * payoutPerShare;
    }

    console.log(`Yield earned: ${payout.toFixed(2)} HEX`);
  }

  // getStakeYield(stakerAddress, stakeIndex);

  const handleConnectWallet = async () => {
    try {
      const { address } = await connectWallet();
      setUserAddress(address);

      const hexBalance = await hexContract.methods.balanceOf(address).call();
      const stakeCount = await hexContract.methods.stakeCount(address).call();
      if (stakeCount) {
        for (let i = 0; i < stakeCount; i++) {
          let stake = await hexContract.methods.stakeLists(address, i).call();
          console.log(stake);
          setUserStakes((userStakes) => userStakes.concat(stake));
          await getStakeYield(address, i);
        }
      } else {
        console.log('you have no Hex stakes');
      }

      setUserHexBalance(parseInt(hexBalance));
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div
      className="pattern-dots pattern-gray-200 pattern-bg-gray-100
    pattern-size-2 pattern-opacity-100 h-screen"
    >
      <div className="px-6 pt-20">
        <h1>Hex Smart Contract</h1>
        {currentDay !== null ? <p>Day: {currentDay.toLocaleString()}</p> : <p>Loading day...</p>}
        {totalSupply !== null ? (
          <p>Total Supply: {(totalSupply / 100000000).toLocaleString()} HEX</p>
        ) : (
          <p>Loading total supply...</p>
        )}
        <button onClick={handleConnectWallet}>Connect Wallet</button>

        {userAddress && (
          <div>
            <h2>User Information</h2>
            <p>Address: {userAddress}</p>
            {userHexBalance !== null ? (
              <>
                <p>Hex Balance: {userHexBalance / 100000000} HEX</p>
                <p> usd value: {(userHexBalance / 100000000) * hexPrice}$</p>
                <table className=" table-auto">
                  <thead>
                    <tr>
                      <th className="p-2">Stake Start</th>
                      <th className="p-2">Staked days</th>
                      <th className="p-2">Progress</th>
                      <th className="p-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userStakes.map((stake) => {
                      return (
                        <tr key={stake.stakeId}>
                          <td className="p-2">{stake.lockedDay}</td>
                          <td className="p-2">{stake.stakedDays}</td>
                          <td className="p-2">{Number(stake.stakedDays) + Number(stake.lockedDay)}</td>
                          <td className="p-2">
                            {(
                              ((Number(stake.lockedDay) - Number(currentDay)) / Number(stake.stakedDays)) *
                              100
                            ).toFixed(2)}
                            %
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            ) : (
              <p>Loading Hex balance...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
