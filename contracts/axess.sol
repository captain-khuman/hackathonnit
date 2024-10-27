// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract axess{
    address public owner;
    mapping(address => bool) public authorizedUsers;

    event UserAdded(address indexed user);
    event UserRemoved(address indexed user);
    event AccessAttempt(address indexed user, uint256 timestamp, bool success);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function addUser(address user) public onlyOwner {
        authorizedUsers[user] = true;
        emit UserAdded(user);
    }

    function removeUser(address user) public onlyOwner {
        authorizedUsers[user] = false;
        emit UserRemoved(user);
    }

    function logAccessAttempt(address user) public {
        bool success = authorizedUsers[user];
        emit AccessAttempt(user, block.timestamp, success);
    }
}
