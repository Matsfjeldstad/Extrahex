// import { Chain } from 'wagmi';
import { Chain } from '@rainbow-me/rainbowkit';

export const pulseChainTestnetV4 = {
  id: 943,
  name: 'PulseChain',
  network: 'PulseChain Testnet-V4',
  iconUrl: '/extrahexlogo.svg',
  iconBackground: '#000000',
  nativeCurrency: {
    decimals: 18,
    name: 'PulseChain',
    symbol: 'tPLS',
  },
  rpcUrls: {
    public: { http: ['https://rpc.v4.testnet.pulsechain.com'] },
    default: { http: ['https://rpc.v4.testnet.pulsechain.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'PulseChain Scan', url: 'https://scan.v4.testnet.pulsechain.com' },
    default: { name: 'PulseChain Scan', url: 'https://scan.v4.testnet.pulsechain.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
    },
  },
  testnet: true,
} as const satisfies Chain;
