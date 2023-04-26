import React from 'react';
import { useAccount, useContractRead, useContractReads } from 'wagmi';
import hex_contract_abi from '@/lib/hex_contract_abi.json';
import { useHexDecimals, useHexGlobals } from '@/lib/blockchain';

type Props = {};

export default function AuthenticatedStats({}: Props) {
  const hexContract = {
    address: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
    abi: hex_contract_abi,
  };

  const { address, isConnected } = useAccount();

  const { data, isError, isLoading } = useHexGlobals({
    address: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
  });

  console.log(data);

  return <div>{!isError && <div>{data.dailyDataCount}</div>}</div>;
}
