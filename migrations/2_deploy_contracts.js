const axess = artifacts.require("axess");
const privacy = artifacts.require("privacy");
const accessControl = artifacts.require("accessControl");

module.exports = function (deployer) {
    deployer.deploy(axess);
    deployer.deploy(privacy);
    deployer.deploy(accessControl);
};