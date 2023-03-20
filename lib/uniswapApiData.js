const getHexUsdPrice = async () => {
  try {
    const response = await fetch('https://uniswapdataapi.azurewebsites.net/api/hexPrice');
    const data = await response.json();
    return data.hexUsd;
  } catch (e) {
    console.log(e);
  }
};

export default getHexUsdPrice;
