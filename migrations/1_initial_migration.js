const coinToken = artifacts.require("coinToken");
const poolToken = artifacts.require("poolToken");
const PlayerBook = artifacts.require("PlayerBook");
const SegmentPowerStrategy = artifacts.require("SegmentPowerStrategy");



const UniswapReward = artifacts.require("UniswapReward");



module.exports = async function (deployer) {
  await deployer.deploy(coinToken);
  await deployer.deploy(poolToken);

  await deployer.deploy(PlayerBook);
  await deployer.deploy(SegmentPowerStrategy);


  await deployer.deploy(UniswapReward);

};
