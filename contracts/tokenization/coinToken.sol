// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract coinToken is
    ERC20,
    Ownable //("COIN", "COIN")
{
    using SafeMath for uint256;

    constructor() public {
        _mint(msg.sender, 100000000000000000000000000);
    }

    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }

    // function mint(uint256 amount) public onlyOwner {
    //     _mint(msg.sender, amount);
    // }
}
