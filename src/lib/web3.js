import Web3 from 'web3';

const infuraURL = `https://mainnet.infura.io/v3/26fe5ae885a04c149fb71fba1ae8b87e`;
const pulsechain = 'https://rpc.v2b.testnet.pulsechain.com';

const getWeb3 = () => {
  const provider = new Web3.providers.HttpProvider(infuraURL);
  const web3 = new Web3(provider);
  return web3;
};

export default getWeb3;
