const UniswapReward = artifacts.require("UniswapReward");
const coinToken = artifacts.require("coinToken");
const poolToken = artifacts.require("poolToken");
const PlayerBook = artifacts.require("PlayerBook");
const SegmentPowerStrategy = artifacts.require("SegmentPowerStrategy");


function getAccounts() {
    return new Promise((resolve, reject) => {
        web3.eth.getAccounts((error, accounts) => {
            resolve(accounts);
        });
    });
};


module.exports = async function () {
    try {
        const accounts = await getAccounts();
        const coinTokenInstance = await coinToken.deployed();
        const poolTokenInstance = await poolToken.deployed();
        const UniswapRewardInstance = await UniswapReward.deployed();
        const PlayerBookInstance = await PlayerBook.deployed();
        const SegmentPowerStrategyInstance = await SegmentPowerStrategy.deployed();



        await UniswapRewardInstance.setDego(coinTokenInstance.address, { from: accounts[0] });
        await UniswapRewardInstance.setLpToken(poolTokenInstance.address, { from: accounts[0] });
        await UniswapRewardInstance.setPlayBook(PlayerBookInstance.address, { from: accounts[0] });
        await UniswapRewardInstance.setPowerStragegy(SegmentPowerStrategyInstance.address, { from: accounts[0] });
        await SegmentPowerStrategyInstance.setCaller(UniswapRewardInstance.address, { from: accounts[0] });

        await PlayerBookInstance.addPool(UniswapRewardInstance.address, { from: accounts[0] });

        //transfer owner ship
        await coinTokenInstance.transferOwnership(UniswapRewardInstance.address, { from: accounts[0] });

    } catch (err) {
        console.log(`fludity  query  error    ${err}`)
        console.error('unexpected error:', err)
        process.exit(1)
    }

    process.exit();
};