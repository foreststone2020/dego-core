const UniswapReward = artifacts.require("UniswapReward");
// const coinToken = artifacts.require("coinToken");
// const poolToken = artifacts.require("poolToken");

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
        // const coinTokenInstance = await coinToken.deployed();
        // const poolTokenInstance = await poolToken.deployed();
        const UniswapRewardInstance = await UniswapReward.deployed();
        await UniswapRewardInstance.startReward(1617349662, { from: accounts[0] });

        // await UniswapRewardInstance.setDego(coinTokenInstance.address, { from: accounts[0] });
        // await UniswapRewardInstance.setLpToken(poolTokenInstance.address, { from: accounts[0] });

    } catch (err) {
        console.log(`fludity  query  error    ${err}`)
        console.error('unexpected error:', err)
        process.exit(1)
    }

    process.exit();
};