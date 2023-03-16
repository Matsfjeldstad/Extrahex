import Web3 from 'web3';

const getWeb3 = () => {
  const provider = new Web3.providers.HttpProvider(
    `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
  );
  const web3 = new Web3(provider);
  return web3;
};

export default getWeb3;
