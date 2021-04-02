// const UniswapReward = artifacts.require("UniswapReward");
// const coinToken = artifacts.require("coinToken");
// const poolToken = artifacts.require("poolToken");
// const PlayerBook = artifacts.require("PlayerBook");
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
        // const coinTokenInstance = await coinToken.deployed();
        // const poolTokenInstance = await poolToken.deployed();
        // const UniswapRewardInstance = await UniswapReward.deployed();
        // const PlayerBookInstance = await PlayerBook.deployed();
        const SegmentPowerStrategyInstance = await SegmentPowerStrategy.deployed();

        var segmentInfo = await SegmentPowerStrategyInstance.querydegoSegment(1);
        console.log(`segmentInfo  ${segmentInfo[0]} -----------${segmentInfo[1]} -----------${segmentInfo[2]} -----------${segmentInfo[3]}  `);
        segmentInfo = await SegmentPowerStrategyInstance.querydegoSegment(2);
        console.log(`segmentInfo  ${segmentInfo[0]} -----------${segmentInfo[1]} -----------${segmentInfo[2]} -----------${segmentInfo[3]}  `);
        segmentInfo = await SegmentPowerStrategyInstance.querydegoSegment(3);
        console.log(`segmentInfo  ${segmentInfo[0]} -----------${segmentInfo[1]} -----------${segmentInfo[2]} -----------${segmentInfo[3]}  `);


    } catch (err) {
        console.log(`fludity  query  error    ${err}`)
        console.error('unexpected error:', err)
        process.exit(1)
    }

    process.exit();
};