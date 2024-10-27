// Temporary basic contract for testing
pragma solidity ^0.8.13;

contract test {
    // Minimal constructor for testing
    constructor() {}

    // Add simple storage for testing
    uint public testValue;

    function setTestValue(uint value) public {
        testValue = value;
    }
}
