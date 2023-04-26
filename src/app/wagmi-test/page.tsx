'use client';


import ConnectToWalletButton from '@/components/ConnectToWalletButton';
import { useAccount, useContractRead, useContractReads } from 'wagmi';
import AuthenticatedStats from '@/components/AuthenticatedStats';

type Props = {};

export default function page({}: Props) {
  const { address, isConnected } = useAccount();
  // const { data, isError, isLoading } = useContractRead({
  //   address: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
  //   abi: hex_contract_abi,
  //   functionName: 'stakeLists',
  //   args: [address, 0],
  // });

  return (
    <div className="mt-20 p-6">
      <ConnectToWalletButton></ConnectToWalletButton>
      <AuthenticatedStats></AuthenticatedStats>
    </div>
  );
}
