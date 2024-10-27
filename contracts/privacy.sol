// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract privacy {
    address public owner;
    bool public privacyEnabled;

    event PrivacySettingChanged(bool enabled);

    constructor() {
        owner = msg.sender;
        privacyEnabled = true;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function setDataPrivacy(bool enabled) public onlyOwner {
        privacyEnabled = enabled;
        emit PrivacySettingChanged(enabled);
    }
}
