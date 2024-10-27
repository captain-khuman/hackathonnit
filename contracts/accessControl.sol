// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract AccessControl {
    address public owner; // Owner of the contract
    mapping(address => bool) private verifiedPersonnel; // Mapping to track verified personnel
    event PersonnelVerified(address indexed personnel);
    event PersonnelRevoked(address indexed personnel);

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender; // Set the contract creator as the owner
    }

    // Function to verify a new personnel
    function verifyPersonnel(address _personnel) external onlyOwner {
        require(!verifiedPersonnel[_personnel], "Personnel is already verified");
        verifiedPersonnel[_personnel] = true;
        emit PersonnelVerified(_personnel);
    }

    // Function to revoke a personnel's access
    function revokePersonnel(address _personnel) external onlyOwner {
        require(verifiedPersonnel[_personnel], "Personnel is not verified");
        verifiedPersonnel[_personnel] = false;
        emit PersonnelRevoked(_personnel);
    }

    // Function to check if a personnel is verified
    function isVerified(address _personnel) external view returns (bool) {
        return verifiedPersonnel[_personnel];
    }

    // Function to get the owner of the contract
    function getOwner() external view returns (address) {
        return owner;
    }
}