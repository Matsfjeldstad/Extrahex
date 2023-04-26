import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import { erc20ABI } from 'wagmi';
import hex_contract_abi from '@/lib/hex_contract_abi.json';

export default defineConfig({
  out: 'lib/blockchain.ts',
  contracts: [
    {
      name: 'hex',
      abi: hex_contract_abi,
    },
    {
      name: 'erc20',
      abi: erc20ABI,
    },
  ],
  plugins: [react()],
});
