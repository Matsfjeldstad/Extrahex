import hexAbi from './hex_contract_abi.json';
import getWeb3 from './web3';

const HEX_CONTRACT_ADDRESS = '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39';

const getHexContract = () => {
  const web3 = getWeb3();
  const hexContract = new web3.eth.Contract(hexAbi, HEX_CONTRACT_ADDRESS);
  return hexContract;
};

export default getHexContract;
