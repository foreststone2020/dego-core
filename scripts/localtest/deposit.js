const UniswapReward = artifacts.require("UniswapReward");
const coinToken = artifacts.require("coinToken");
const poolToken = artifacts.require("poolToken");

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
        const poolTokenInstance = await poolToken.deployed();
        const UniswapRewardInstance = await UniswapReward.deployed();

        for (let i = 400; i != 600; i++) {
            await poolTokenInstance.transfer(accounts[i], i + 1500, { from: accounts[0] });
            await poolTokenInstance.approve(UniswapRewardInstance.address, i + 1499, { from: accounts[i] });
            var res = await UniswapRewardInstance.stake(i + 1499, "just for test", { from: accounts[i] });
            console.log(`account  ${accounts[i]} -----------${res.receipt.gasUsed} -----------${i}  `);
        }

    } catch (err) {
        console.log(`fludity  query  error    ${err}`)
        console.error('unexpected error:', err)
        process.exit(1)
    }

    process.exit();
};