import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

export const connectWallet = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      // Request account access
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(provider);

      return {
        web3,
        address: accounts[0],
      };
    } catch (error) {
      console.error('User denied account access');
      throw error;
    }
  } else {
    console.error('No Ethereum provider detected');
    throw new Error('No Ethereum provider detected');
  }
};
