import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc';
// import { infuraProvider } from 'wagmi/providers/infura';

import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { pulseChainTestnetV4 } from '@/lib/Pulsechain';

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider } = configureChains(
  [mainnet, pulseChainTestnetV4],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default.http[0],
      }),
    }),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'extrahex',
  chains,
});

// Set up client
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

interface WagmiProviderProps {
  children: React.ReactNode;
}

export function WagmiProvider({ children }: WagmiProviderProps) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider
        theme={lightTheme({
          accentColor: '#444',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        chains={chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

// // Pass client to React Context Provider
// function App() {
//   return (
//     <WagmiConfig client={client}>
//       <Profile />
//     </WagmiConfig>
//   );
// }
