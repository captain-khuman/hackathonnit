document.addEventListener("DOMContentLoaded", async () => {
    if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Manually paste the ABI data here
        const AccessControlABI = [
            {
                "contractName": "axess",
                "abi": [
                  {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                      },
                      {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                      },
                      {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                      }
                    ],
                    "name": "AccessAttempt",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                      }
                    ],
                    "name": "UserAdded",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                      }
                    ],
                    "name": "UserRemoved",
                    "type": "event"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "name": "authorizedUsers",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                      }
                    ],
                    "name": "addUser",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                      }
                    ],
                    "name": "removeUser",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                      }
                    ],
                    "name": "logAccessAttempt",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  }
                ],
                "metadata": "{\"compiler\":{\"version\":\"0.8.13+commit.abaa5c0e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"name\":\"AccessAttempt\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserRemoved\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"addUser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorizedUsers\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"logAccessAttempt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"removeUser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/axess.sol\":\"axess\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/axess.sol\":{\"keccak256\":\"0x12d6ae359534591f1a21ac7ccb7cb7da43170e9c4f299a64075e9f351df32cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4558b1e25d5b2c635393960c8f3ca3492c53b39aa3ede022f11aeba27199335f\",\"dweb:/ipfs/QmeWxeskbugbhbR38ucvNqLv5x8VTKQQV1pn5bNEjXdSUG\"]}},\"version\":1}",
                "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610623806100606000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631828983a1461005c578063293c7ca21461008c578063421b2d8b146100a85780638da5cb5b146100c457806398575188146100e2575b600080fd5b610076600480360381019061007191906104a1565b6100fe565b60405161008391906104e9565b60405180910390f35b6100a660048036038101906100a191906104a1565b61011e565b005b6100c260048036038101906100bd91906104a1565b6101c3565b005b6100cc6102ee565b6040516100d99190610513565b60405180910390f35b6100fc60048036038101906100f791906104a1565b610312565b005b60016020528060005260406000206000915054906101000a900460ff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690508173ffffffffffffffffffffffffffffffffffffffff167fc9741799a597e7f829344104324324429e7cbf17608dd6c0da07231b1f80ba4e42836040516101b7929190610547565b60405180910390a25050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610251576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610248906105cd565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f19ef9a4877199f89440a26acb26895ec02ed86f2df1aeaa90dc18041b892f71f60405160405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610397906105cd565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fe9dce8c992623ce791725b21e857e33248d1f190a25b5168313420eebdaae99d60405160405180910390a250565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061046e82610443565b9050919050565b61047e81610463565b811461048957600080fd5b50565b60008135905061049b81610475565b92915050565b6000602082840312156104b7576104b661043e565b5b60006104c58482850161048c565b91505092915050565b60008115159050919050565b6104e3816104ce565b82525050565b60006020820190506104fe60008301846104da565b92915050565b61050d81610463565b82525050565b60006020820190506105286000830184610504565b92915050565b6000819050919050565b6105418161052e565b82525050565b600060408201905061055c6000830185610538565b61056960208301846104da565b9392505050565b600082825260208201905092915050565b7f4e6f742074686520636f6e7472616374206f776e657200000000000000000000600082015250565b60006105b7601683610570565b91506105c282610581565b602082019050919050565b600060208201905081810360008301526105e6816105aa565b905091905056fea264697066735822122080ba0abb6a73c6c3a56aa71f572e3a4e1c9f92082736fd23ab94eef0cf9ad1e064736f6c634300080d0033",
                "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80631828983a1461005c578063293c7ca21461008c578063421b2d8b146100a85780638da5cb5b146100c457806398575188146100e2575b600080fd5b610076600480360381019061007191906104a1565b6100fe565b60405161008391906104e9565b60405180910390f35b6100a660048036038101906100a191906104a1565b61011e565b005b6100c260048036038101906100bd91906104a1565b6101c3565b005b6100cc6102ee565b6040516100d99190610513565b60405180910390f35b6100fc60048036038101906100f791906104a1565b610312565b005b60016020528060005260406000206000915054906101000a900460ff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690508173ffffffffffffffffffffffffffffffffffffffff167fc9741799a597e7f829344104324324429e7cbf17608dd6c0da07231b1f80ba4e42836040516101b7929190610547565b60405180910390a25050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610251576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610248906105cd565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f19ef9a4877199f89440a26acb26895ec02ed86f2df1aeaa90dc18041b892f71f60405160405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610397906105cd565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fe9dce8c992623ce791725b21e857e33248d1f190a25b5168313420eebdaae99d60405160405180910390a250565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061046e82610443565b9050919050565b61047e81610463565b811461048957600080fd5b50565b60008135905061049b81610475565b92915050565b6000602082840312156104b7576104b661043e565b5b60006104c58482850161048c565b91505092915050565b60008115159050919050565b6104e3816104ce565b82525050565b60006020820190506104fe60008301846104da565b92915050565b61050d81610463565b82525050565b60006020820190506105286000830184610504565b92915050565b6000819050919050565b6105418161052e565b82525050565b600060408201905061055c6000830185610538565b61056960208301846104da565b9392505050565b600082825260208201905092915050565b7f4e6f742074686520636f6e7472616374206f776e657200000000000000000000600082015250565b60006105b7601683610570565b91506105c282610581565b602082019050919050565b600060208201905081810360008301526105e6816105aa565b905091905056fea264697066735822122080ba0abb6a73c6c3a56aa71f572e3a4e1c9f92082736fd23ab94eef0cf9ad1e064736f6c634300080d0033",
                "immutableReferences": {},
                "generatedSources": [],
                "deployedGeneratedSources": [
                  {
                    "ast": {
                      "nodeType": "YulBlock",
                      "src": "0:3635:4",
                      "statements": [
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "47:35:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "57:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "73:2:4",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "67:5:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "67:9:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "memPtr",
                                    "nodeType": "YulIdentifier",
                                    "src": "57:6:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "allocate_unbounded",
                          "nodeType": "YulFunctionDefinition",
                          "returnVariables": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "40:6:4",
                              "type": ""
                            }
                          ],
                          "src": "7:75:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "177:28:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "194:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "197:1:4",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "revert",
                                    "nodeType": "YulIdentifier",
                                    "src": "187:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "187:12:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "187:12:4"
                              }
                            ]
                          },
                          "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                          "nodeType": "YulFunctionDefinition",
                          "src": "88:117:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "300:28:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "317:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "320:1:4",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "revert",
                                    "nodeType": "YulIdentifier",
                                    "src": "310:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "310:12:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "310:12:4"
                              }
                            ]
                          },
                          "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                          "nodeType": "YulFunctionDefinition",
                          "src": "211:117:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "379:81:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "389:65:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "404:5:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "411:42:4",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "400:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "400:54:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "389:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_uint160",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "361:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "371:7:4",
                              "type": ""
                            }
                          ],
                          "src": "334:126:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "511:51:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "521:35:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "550:5:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint160",
                                    "nodeType": "YulIdentifier",
                                    "src": "532:17:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "532:24:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "521:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "493:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "503:7:4",
                              "type": ""
                            }
                          ],
                          "src": "466:96:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "611:79:4",
                            "statements": [
                              {
                                "body": {
                                  "nodeType": "YulBlock",
                                  "src": "668:16:4",
                                  "statements": [
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "677:1:4",
                                            "type": "",
                                            "value": "0"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "680:1:4",
                                            "type": "",
                                            "value": "0"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "revert",
                                          "nodeType": "YulIdentifier",
                                          "src": "670:6:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "670:12:4"
                                      },
                                      "nodeType": "YulExpressionStatement",
                                      "src": "670:12:4"
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "634:5:4"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "value",
                                              "nodeType": "YulIdentifier",
                                              "src": "659:5:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "cleanup_t_address",
                                            "nodeType": "YulIdentifier",
                                            "src": "641:17:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "641:24:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "631:2:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "631:35:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "624:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "624:43:4"
                                },
                                "nodeType": "YulIf",
                                "src": "621:63:4"
                              }
                            ]
                          },
                          "name": "validator_revert_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "604:5:4",
                              "type": ""
                            }
                          ],
                          "src": "568:122:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "748:87:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "758:29:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "780:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "calldataload",
                                    "nodeType": "YulIdentifier",
                                    "src": "767:12:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "767:20:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "758:5:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "823:5:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "validator_revert_t_address",
                                    "nodeType": "YulIdentifier",
                                    "src": "796:26:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "796:33:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "796:33:4"
                              }
                            ]
                          },
                          "name": "abi_decode_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "726:6:4",
                              "type": ""
                            },
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "734:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "742:5:4",
                              "type": ""
                            }
                          ],
                          "src": "696:139:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "907:263:4",
                            "statements": [
                              {
                                "body": {
                                  "nodeType": "YulBlock",
                                  "src": "953:83:4",
                                  "statements": [
                                    {
                                      "expression": {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                          "nodeType": "YulIdentifier",
                                          "src": "955:77:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "955:79:4"
                                      },
                                      "nodeType": "YulExpressionStatement",
                                      "src": "955:79:4"
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "dataEnd",
                                          "nodeType": "YulIdentifier",
                                          "src": "928:7:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "937:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "924:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "924:23:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "949:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "slt",
                                    "nodeType": "YulIdentifier",
                                    "src": "920:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "920:32:4"
                                },
                                "nodeType": "YulIf",
                                "src": "917:119:4"
                              },
                              {
                                "nodeType": "YulBlock",
                                "src": "1046:117:4",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "1061:15:4",
                                    "value": {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1075:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    "variables": [
                                      {
                                        "name": "offset",
                                        "nodeType": "YulTypedName",
                                        "src": "1065:6:4",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "1090:63:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "headStart",
                                              "nodeType": "YulIdentifier",
                                              "src": "1125:9:4"
                                            },
                                            {
                                              "name": "offset",
                                              "nodeType": "YulIdentifier",
                                              "src": "1136:6:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1121:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1121:22:4"
                                        },
                                        {
                                          "name": "dataEnd",
                                          "nodeType": "YulIdentifier",
                                          "src": "1145:7:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "abi_decode_t_address",
                                        "nodeType": "YulIdentifier",
                                        "src": "1100:20:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1100:53:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value0",
                                        "nodeType": "YulIdentifier",
                                        "src": "1090:6:4"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_decode_tuple_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "877:9:4",
                              "type": ""
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulTypedName",
                              "src": "888:7:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "900:6:4",
                              "type": ""
                            }
                          ],
                          "src": "841:329:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1218:48:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1228:32:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "1253:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "1246:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1246:13:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1239:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1239:21:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "1228:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_bool",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1200:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "1210:7:4",
                              "type": ""
                            }
                          ],
                          "src": "1176:90:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1331:50:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "1348:3:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "1368:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "cleanup_t_bool",
                                        "nodeType": "YulIdentifier",
                                        "src": "1353:14:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1353:21:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "1341:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1341:34:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1341:34:4"
                              }
                            ]
                          },
                          "name": "abi_encode_t_bool_to_t_bool_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1319:5:4",
                              "type": ""
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "1326:3:4",
                              "type": ""
                            }
                          ],
                          "src": "1272:109:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1479:118:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1489:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "1501:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1512:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1497:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1497:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "1489:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "1563:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "1576:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1587:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "1572:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1572:17:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_bool_to_t_bool_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "1525:37:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1525:65:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1525:65:4"
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "1451:9:4",
                              "type": ""
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "1463:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "1474:4:4",
                              "type": ""
                            }
                          ],
                          "src": "1387:210:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1668:53:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "1685:3:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "1708:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "cleanup_t_address",
                                        "nodeType": "YulIdentifier",
                                        "src": "1690:17:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1690:24:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "1678:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1678:37:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1678:37:4"
                              }
                            ]
                          },
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1656:5:4",
                              "type": ""
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "1663:3:4",
                              "type": ""
                            }
                          ],
                          "src": "1603:118:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1825:124:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1835:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "1847:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1858:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1843:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1843:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "1835:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "1915:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "1928:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1939:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "1924:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1924:17:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_address_to_t_address_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "1871:43:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1871:71:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1871:71:4"
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "1797:9:4",
                              "type": ""
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "1809:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "1820:4:4",
                              "type": ""
                            }
                          ],
                          "src": "1727:222:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2000:32:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2010:16:4",
                                "value": {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2021:5:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "2010:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1982:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "1992:7:4",
                              "type": ""
                            }
                          ],
                          "src": "1955:77:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2103:53:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2120:3:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "2143:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "cleanup_t_uint256",
                                        "nodeType": "YulIdentifier",
                                        "src": "2125:17:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2125:24:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2113:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2113:37:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2113:37:4"
                              }
                            ]
                          },
                          "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "2091:5:4",
                              "type": ""
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "2098:3:4",
                              "type": ""
                            }
                          ],
                          "src": "2038:118:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2282:200:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2292:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "2304:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2315:2:4",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2300:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2300:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "2292:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "2372:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "2385:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2396:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2381:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2381:17:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "2328:43:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2328:71:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2328:71:4"
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value1",
                                      "nodeType": "YulIdentifier",
                                      "src": "2447:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "2460:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2471:2:4",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2456:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2456:18:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_bool_to_t_bool_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "2409:37:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2409:66:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2409:66:4"
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_uint256_t_bool__to_t_uint256_t_bool__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "2246:9:4",
                              "type": ""
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulTypedName",
                              "src": "2258:6:4",
                              "type": ""
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "2266:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "2277:4:4",
                              "type": ""
                            }
                          ],
                          "src": "2162:320:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2584:73:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2601:3:4"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "2606:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2594:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2594:19:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2594:19:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "2622:29:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2641:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2646:4:4",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2637:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2637:14:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "updated_pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "2622:11:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "2556:3:4",
                              "type": ""
                            },
                            {
                              "name": "length",
                              "nodeType": "YulTypedName",
                              "src": "2561:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "updated_pos",
                              "nodeType": "YulTypedName",
                              "src": "2572:11:4",
                              "type": ""
                            }
                          ],
                          "src": "2488:169:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2769:66:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "memPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "2791:6:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2799:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2787:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2787:14:4"
                                    },
                                    {
                                      "hexValue": "4e6f742074686520636f6e7472616374206f776e6572",
                                      "kind": "string",
                                      "nodeType": "YulLiteral",
                                      "src": "2803:24:4",
                                      "type": "",
                                      "value": "Not the contract owner"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2780:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2780:48:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2780:48:4"
                              }
                            ]
                          },
                          "name": "store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "2761:6:4",
                              "type": ""
                            }
                          ],
                          "src": "2663:172:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2987:220:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2997:74:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "3063:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3068:2:4",
                                      "type": "",
                                      "value": "22"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "3004:58:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3004:67:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "2997:3:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "3169:3:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                                    "nodeType": "YulIdentifier",
                                    "src": "3080:88:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3080:93:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3080:93:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "3182:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "3193:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3198:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3189:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3189:12:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "end",
                                    "nodeType": "YulIdentifier",
                                    "src": "3182:3:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "2975:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "2983:3:4",
                              "type": ""
                            }
                          ],
                          "src": "2841:366:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3384:248:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "3394:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "3406:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3417:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3402:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3402:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "3394:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "3441:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3452:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "3437:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3437:17:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "tail",
                                          "nodeType": "YulIdentifier",
                                          "src": "3460:4:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "3466:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "3456:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3456:20:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "3430:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3430:47:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3430:47:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "3486:139:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "tail",
                                      "nodeType": "YulIdentifier",
                                      "src": "3620:4:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "3494:124:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3494:131:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "3486:4:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8__to_t_string_memory_ptr__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "3364:9:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "3379:4:4",
                              "type": ""
                            }
                          ],
                          "src": "3213:419:4"
                        }
                      ]
                    },
                    "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256_t_bool__to_t_uint256_t_bool__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_bool_to_t_bool_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8(memPtr) {\n\n        mstore(add(memPtr, 0), \"Not the contract owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n        store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
                    "id": 4,
                    "language": "Yul",
                    "name": "#utility.yul"
                  }
                ],
                "sourceMap": "61:890:1:-:0;;;338:51;;;;;;;;;;371:10;363:5;;:18;;;;;;;;;;;;;;;;;;61:890;;;;;;",
                "deployedSourceMap": "61:890:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;109:47;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;785:163;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;511:126;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;82:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;645:132;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;109:47;;;;;;;;;;;;;;;;;;;;;;:::o;785:163::-;843:12;858:15;:21;874:4;858:21;;;;;;;;;;;;;;;;;;;;;;;;;843:36;;909:4;895:45;;;915:15;932:7;895:45;;;;;;;:::i;:::-;;;;;;;;832:116;785:163;:::o;511:126::-;451:5;;;;;;;;;;437:19;;:10;:19;;;429:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;594:4:::1;570:15:::0;:21:::1;586:4;570:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;624:4;614:15;;;;;;;;;;;;511:126:::0;:::o;82:20::-;;;;;;;;;;;;:::o;645:132::-;451:5;;;;;;;;;;437:19;;:10;:19;;;429:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;731:5:::1;707:15;:21;723:4;707:21;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;764:4;752:17;;;;;;;;;;;;645:132:::0;:::o;88:117:4:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:329::-;900:6;949:2;937:9;928:7;924:23;920:32;917:119;;;955:79;;:::i;:::-;917:119;1075:1;1100:53;1145:7;1136:6;1125:9;1121:22;1100:53;:::i;:::-;1090:63;;1046:117;841:329;;;;:::o;1176:90::-;1210:7;1253:5;1246:13;1239:21;1228:32;;1176:90;;;:::o;1272:109::-;1353:21;1368:5;1353:21;:::i;:::-;1348:3;1341:34;1272:109;;:::o;1387:210::-;1474:4;1512:2;1501:9;1497:18;1489:26;;1525:65;1587:1;1576:9;1572:17;1563:6;1525:65;:::i;:::-;1387:210;;;;:::o;1603:118::-;1690:24;1708:5;1690:24;:::i;:::-;1685:3;1678:37;1603:118;;:::o;1727:222::-;1820:4;1858:2;1847:9;1843:18;1835:26;;1871:71;1939:1;1928:9;1924:17;1915:6;1871:71;:::i;:::-;1727:222;;;;:::o;1955:77::-;1992:7;2021:5;2010:16;;1955:77;;;:::o;2038:118::-;2125:24;2143:5;2125:24;:::i;:::-;2120:3;2113:37;2038:118;;:::o;2162:320::-;2277:4;2315:2;2304:9;2300:18;2292:26;;2328:71;2396:1;2385:9;2381:17;2372:6;2328:71;:::i;:::-;2409:66;2471:2;2460:9;2456:18;2447:6;2409:66;:::i;:::-;2162:320;;;;;:::o;2488:169::-;2572:11;2606:6;2601:3;2594:19;2646:4;2641:3;2637:14;2622:29;;2488:169;;;;:::o;2663:172::-;2803:24;2799:1;2791:6;2787:14;2780:48;2663:172;:::o;2841:366::-;2983:3;3004:67;3068:2;3063:3;3004:67;:::i;:::-;2997:74;;3080:93;3169:3;3080:93;:::i;:::-;3198:2;3193:3;3189:12;3182:19;;2841:366;;;:::o;3213:419::-;3379:4;3417:2;3406:9;3402:18;3394:26;;3466:9;3460:4;3456:20;3452:1;3441:9;3437:17;3430:47;3494:131;3620:4;3494:131;:::i;:::-;3486:139;;3213:419;;;:::o",
                "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.13;\r\n\r\ncontract axess{\r\n    address public owner;\r\n    mapping(address => bool) public authorizedUsers;\r\n\r\n    event UserAdded(address indexed user);\r\n    event UserRemoved(address indexed user);\r\n    event AccessAttempt(address indexed user, uint256 timestamp, bool success);\r\n\r\n    constructor() {\r\n        owner = msg.sender;\r\n    }\r\n\r\n    modifier onlyOwner() {\r\n        require(msg.sender == owner, \"Not the contract owner\");\r\n        _;\r\n    }\r\n\r\n    function addUser(address user) public onlyOwner {\r\n        authorizedUsers[user] = true;\r\n        emit UserAdded(user);\r\n    }\r\n\r\n    function removeUser(address user) public onlyOwner {\r\n        authorizedUsers[user] = false;\r\n        emit UserRemoved(user);\r\n    }\r\n\r\n    function logAccessAttempt(address user) public {\r\n        bool success = authorizedUsers[user];\r\n        emit AccessAttempt(user, block.timestamp, success);\r\n    }\r\n}\r\n",
                "sourcePath": "C:\\Users\\Aksha\\Desktop\\BlockLock\\codeutsaveme\\contracts\\axess.sol",
                "ast": {
                  "absolutePath": "project:/contracts/axess.sol",
                  "exportedSymbols": {
                    "axess": [
                      209
                    ]
                  },
                  "id": 210,
                  "license": "MIT",
                  "nodeType": "SourceUnit",
                  "nodes": [
                    {
                      "id": 110,
                      "literals": [
                        "solidity",
                        "^",
                        "0.8",
                        ".13"
                      ],
                      "nodeType": "PragmaDirective",
                      "src": "33:24:1"
                    },
                    {
                      "abstract": false,
                      "baseContracts": [],
                      "canonicalName": "axess",
                      "contractDependencies": [],
                      "contractKind": "contract",
                      "fullyImplemented": true,
                      "id": 209,
                      "linearizedBaseContracts": [
                        209
                      ],
                      "name": "axess",
                      "nameLocation": "70:5:1",
                      "nodeType": "ContractDefinition",
                      "nodes": [
                        {
                          "constant": false,
                          "functionSelector": "8da5cb5b",
                          "id": 112,
                          "mutability": "mutable",
                          "name": "owner",
                          "nameLocation": "97:5:1",
                          "nodeType": "VariableDeclaration",
                          "scope": 209,
                          "src": "82:20:1",
                          "stateVariable": true,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "typeName": {
                            "id": 111,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "82:7:1",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "visibility": "public"
                        },
                        {
                          "constant": false,
                          "functionSelector": "1828983a",
                          "id": 116,
                          "mutability": "mutable",
                          "name": "authorizedUsers",
                          "nameLocation": "141:15:1",
                          "nodeType": "VariableDeclaration",
                          "scope": 209,
                          "src": "109:47:1",
                          "stateVariable": true,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          },
                          "typeName": {
                            "id": 115,
                            "keyType": {
                              "id": 113,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "117:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "Mapping",
                            "src": "109:24:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            },
                            "valueType": {
                              "id": 114,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "128:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          },
                          "visibility": "public"
                        },
                        {
                          "anonymous": false,
                          "eventSelector": "19ef9a4877199f89440a26acb26895ec02ed86f2df1aeaa90dc18041b892f71f",
                          "id": 120,
                          "name": "UserAdded",
                          "nameLocation": "171:9:1",
                          "nodeType": "EventDefinition",
                          "parameters": {
                            "id": 119,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 118,
                                "indexed": true,
                                "mutability": "mutable",
                                "name": "user",
                                "nameLocation": "197:4:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 120,
                                "src": "181:20:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 117,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "181:7:1",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "180:22:1"
                          },
                          "src": "165:38:1"
                        },
                        {
                          "anonymous": false,
                          "eventSelector": "e9dce8c992623ce791725b21e857e33248d1f190a25b5168313420eebdaae99d",
                          "id": 124,
                          "name": "UserRemoved",
                          "nameLocation": "215:11:1",
                          "nodeType": "EventDefinition",
                          "parameters": {
                            "id": 123,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 122,
                                "indexed": true,
                                "mutability": "mutable",
                                "name": "user",
                                "nameLocation": "243:4:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 124,
                                "src": "227:20:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 121,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "227:7:1",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "226:22:1"
                          },
                          "src": "209:40:1"
                        },
                        {
                          "anonymous": false,
                          "eventSelector": "c9741799a597e7f829344104324324429e7cbf17608dd6c0da07231b1f80ba4e",
                          "id": 132,
                          "name": "AccessAttempt",
                          "nameLocation": "261:13:1",
                          "nodeType": "EventDefinition",
                          "parameters": {
                            "id": 131,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 126,
                                "indexed": true,
                                "mutability": "mutable",
                                "name": "user",
                                "nameLocation": "291:4:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 132,
                                "src": "275:20:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 125,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "275:7:1",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              },
                              {
                                "constant": false,
                                "id": 128,
                                "indexed": false,
                                "mutability": "mutable",
                                "name": "timestamp",
                                "nameLocation": "305:9:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 132,
                                "src": "297:17:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "typeName": {
                                  "id": 127,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "297:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "visibility": "internal"
                              },
                              {
                                "constant": false,
                                "id": 130,
                                "indexed": false,
                                "mutability": "mutable",
                                "name": "success",
                                "nameLocation": "321:7:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 132,
                                "src": "316:12:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "typeName": {
                                  "id": 129,
                                  "name": "bool",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "316:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "274:55:1"
                          },
                          "src": "255:75:1"
                        },
                        {
                          "body": {
                            "id": 140,
                            "nodeType": "Block",
                            "src": "352:37:1",
                            "statements": [
                              {
                                "expression": {
                                  "id": 138,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "id": 135,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 112,
                                    "src": "363:5:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "expression": {
                                      "id": 136,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "371:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 137,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "371:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "363:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 139,
                                "nodeType": "ExpressionStatement",
                                "src": "363:18:1"
                              }
                            ]
                          },
                          "id": 141,
                          "implemented": true,
                          "kind": "constructor",
                          "modifiers": [],
                          "name": "",
                          "nameLocation": "-1:-1:-1",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 133,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "349:2:1"
                          },
                          "returnParameters": {
                            "id": 134,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "352:0:1"
                          },
                          "scope": 209,
                          "src": "338:51:1",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "public"
                        },
                        {
                          "body": {
                            "id": 152,
                            "nodeType": "Block",
                            "src": "418:85:1",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "id": 147,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "id": 144,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967281,
                                          "src": "437:3:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 145,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "437:10:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "id": 146,
                                        "name": "owner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 112,
                                        "src": "451:5:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "src": "437:19:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "hexValue": "4e6f742074686520636f6e7472616374206f776e6572",
                                      "id": 148,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "458:24:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                                        "typeString": "literal_string \"Not the contract owner\""
                                      },
                                      "value": "Not the contract owner"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                                        "typeString": "literal_string \"Not the contract owner\""
                                      }
                                    ],
                                    "id": 143,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      4294967278,
                                      4294967278
                                    ],
                                    "referencedDeclaration": 4294967278,
                                    "src": "429:7:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 149,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "429:54:1",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 150,
                                "nodeType": "ExpressionStatement",
                                "src": "429:54:1"
                              },
                              {
                                "id": 151,
                                "nodeType": "PlaceholderStatement",
                                "src": "494:1:1"
                              }
                            ]
                          },
                          "id": 153,
                          "name": "onlyOwner",
                          "nameLocation": "406:9:1",
                          "nodeType": "ModifierDefinition",
                          "parameters": {
                            "id": 142,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "415:2:1"
                          },
                          "src": "397:106:1",
                          "virtual": false,
                          "visibility": "internal"
                        },
                        {
                          "body": {
                            "id": 170,
                            "nodeType": "Block",
                            "src": "559:78:1",
                            "statements": [
                              {
                                "expression": {
                                  "id": 164,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 160,
                                      "name": "authorizedUsers",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 116,
                                      "src": "570:15:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                        "typeString": "mapping(address => bool)"
                                      }
                                    },
                                    "id": 162,
                                    "indexExpression": {
                                      "id": 161,
                                      "name": "user",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 155,
                                      "src": "586:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "570:21:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "hexValue": "74727565",
                                    "id": 163,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "594:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  "src": "570:28:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 165,
                                "nodeType": "ExpressionStatement",
                                "src": "570:28:1"
                              },
                              {
                                "eventCall": {
                                  "arguments": [
                                    {
                                      "id": 167,
                                      "name": "user",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 155,
                                      "src": "624:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 166,
                                    "name": "UserAdded",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120,
                                    "src": "614:9:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                      "typeString": "function (address)"
                                    }
                                  },
                                  "id": 168,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "614:15:1",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 169,
                                "nodeType": "EmitStatement",
                                "src": "609:20:1"
                              }
                            ]
                          },
                          "functionSelector": "421b2d8b",
                          "id": 171,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [
                            {
                              "id": 158,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                "id": 157,
                                "name": "onlyOwner",
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 153,
                                "src": "549:9:1"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "549:9:1"
                            }
                          ],
                          "name": "addUser",
                          "nameLocation": "520:7:1",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 156,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 155,
                                "mutability": "mutable",
                                "name": "user",
                                "nameLocation": "536:4:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 171,
                                "src": "528:12:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 154,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "528:7:1",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "527:14:1"
                          },
                          "returnParameters": {
                            "id": 159,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "559:0:1"
                          },
                          "scope": 209,
                          "src": "511:126:1",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "public"
                        },
                        {
                          "body": {
                            "id": 188,
                            "nodeType": "Block",
                            "src": "696:81:1",
                            "statements": [
                              {
                                "expression": {
                                  "id": 182,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 178,
                                      "name": "authorizedUsers",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 116,
                                      "src": "707:15:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                        "typeString": "mapping(address => bool)"
                                      }
                                    },
                                    "id": 180,
                                    "indexExpression": {
                                      "id": 179,
                                      "name": "user",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 173,
                                      "src": "723:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "707:21:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "hexValue": "66616c7365",
                                    "id": 181,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "731:5:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "false"
                                  },
                                  "src": "707:29:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 183,
                                "nodeType": "ExpressionStatement",
                                "src": "707:29:1"
                              },
                              {
                                "eventCall": {
                                  "arguments": [
                                    {
                                      "id": 185,
                                      "name": "user",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 173,
                                      "src": "764:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 184,
                                    "name": "UserRemoved",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 124,
                                    "src": "752:11:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                      "typeString": "function (address)"
                                    }
                                  },
                                  "id": 186,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "752:17:1",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 187,
                                "nodeType": "EmitStatement",
                                "src": "747:22:1"
                              }
                            ]
                          },
                          "functionSelector": "98575188",
                          "id": 189,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [
                            {
                              "id": 176,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                "id": 175,
                                "name": "onlyOwner",
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 153,
                                "src": "686:9:1"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "686:9:1"
                            }
                          ],
                          "name": "removeUser",
                          "nameLocation": "654:10:1",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 174,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 173,
                                "mutability": "mutable",
                                "name": "user",
                                "nameLocation": "673:4:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 189,
                                "src": "665:12:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 172,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "665:7:1",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "664:14:1"
                          },
                          "returnParameters": {
                            "id": 177,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "696:0:1"
                          },
                          "scope": 209,
                          "src": "645:132:1",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "public"
                        },
                        {
                          "body": {
                            "id": 207,
                            "nodeType": "Block",
                            "src": "832:116:1",
                            "statements": [
                              {
                                "assignments": [
                                  195
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 195,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "848:7:1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 207,
                                    "src": "843:12:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "typeName": {
                                      "id": 194,
                                      "name": "bool",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "843:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 199,
                                "initialValue": {
                                  "baseExpression": {
                                    "id": 196,
                                    "name": "authorizedUsers",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 116,
                                    "src": "858:15:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                      "typeString": "mapping(address => bool)"
                                    }
                                  },
                                  "id": 198,
                                  "indexExpression": {
                                    "id": 197,
                                    "name": "user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 191,
                                    "src": "874:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "858:21:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "843:36:1"
                              },
                              {
                                "eventCall": {
                                  "arguments": [
                                    {
                                      "id": 201,
                                      "name": "user",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 191,
                                      "src": "909:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "expression": {
                                        "id": 202,
                                        "name": "block",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4294967292,
                                        "src": "915:5:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_block",
                                          "typeString": "block"
                                        }
                                      },
                                      "id": 203,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "timestamp",
                                      "nodeType": "MemberAccess",
                                      "src": "915:15:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "id": 204,
                                      "name": "success",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 195,
                                      "src": "932:7:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "id": 200,
                                    "name": "AccessAttempt",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 132,
                                    "src": "895:13:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                                      "typeString": "function (address,uint256,bool)"
                                    }
                                  },
                                  "id": 205,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "895:45:1",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 206,
                                "nodeType": "EmitStatement",
                                "src": "890:50:1"
                              }
                            ]
                          },
                          "functionSelector": "293c7ca2",
                          "id": 208,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [],
                          "name": "logAccessAttempt",
                          "nameLocation": "794:16:1",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 192,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 191,
                                "mutability": "mutable",
                                "name": "user",
                                "nameLocation": "819:4:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 208,
                                "src": "811:12:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 190,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "811:7:1",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "810:14:1"
                          },
                          "returnParameters": {
                            "id": 193,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "832:0:1"
                          },
                          "scope": 209,
                          "src": "785:163:1",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "public"
                        }
                      ],
                      "scope": 210,
                      "src": "61:890:1",
                      "usedErrors": []
                    }
                  ],
                  "src": "33:920:1"
                },
                "compiler": {
                  "name": "solc",
                  "version": "0.8.13+commit.abaa5c0e.Emscripten.clang"
                },
                "networks": {
                  "5777": {
                    "events": {},
                    "links": {},
                    "address": "0x30Cc93F37eF78CEFE383A8682B613a079d8029B4",
                    "transactionHash": "0xfad507ad4e246126daae1a9b15cbcfce78656f0dafd4b283401e5b972b50ff4e"
                  }
                },
                "schemaVersion": "3.4.16",
                "updatedAt": "2024-10-27T02:29:42.654Z",
                "networkType": "ethereum",
                "devdoc": {
                  "kind": "dev",
                  "methods": {},
                  "version": 1
                },
                "userdoc": {
                  "kind": "user",
                  "methods": {},
                  "version": 1
                }
              }
        ];
        const DataPrivacyABI = [
            {
                "contractName": "privacy",
                "abi": [
                  {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "enabled",
                        "type": "bool"
                      }
                    ],
                    "name": "PrivacySettingChanged",
                    "type": "event"
                  },
                  {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "privacyEnabled",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bool",
                        "name": "enabled",
                        "type": "bool"
                      }
                    ],
                    "name": "setDataPrivacy",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  }
                ],
                "metadata": "{\"compiler\":{\"version\":\"0.8.13+commit.abaa5c0e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PrivacySettingChanged\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"privacyEnabled\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setDataPrivacy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/privacy.sol\":\"privacy\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/privacy.sol\":{\"keccak256\":\"0x53f428adca2744751783b2d2d669306be291cfe7056b31bb53267c69a72b1a55\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3e6f22451427f3d4ef6c4d15714b496c3e836be2c8b9e5dd16b9d187f31e4fa0\",\"dweb:/ipfs/Qmaz1xTBVGnqhdr4CMku6oC7bGWz2kutAGbsKN27amauPk\"]}},\"version\":1}",
                "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600060146101000a81548160ff02191690831515021790555061035a8061007b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063303e715f146100465780638da5cb5b14610064578063c086591c14610082575b600080fd5b61004e61009e565b60405161005b91906101d2565b60405180910390f35b61006c6100b1565b604051610079919061022e565b60405180910390f35b61009c6004803603810190610097919061027a565b6100d5565b005b600060149054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a90610304565b60405180910390fd5b80600060146101000a81548160ff0219169083151502179055507f7cf6f27166635ca7de380792e502673562c065b49455b821093b491067cea553816040516101ac91906101d2565b60405180910390a150565b60008115159050919050565b6101cc816101b7565b82525050565b60006020820190506101e760008301846101c3565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610218826101ed565b9050919050565b6102288161020d565b82525050565b6000602082019050610243600083018461021f565b92915050565b600080fd5b610257816101b7565b811461026257600080fd5b50565b6000813590506102748161024e565b92915050565b6000602082840312156102905761028f610249565b5b600061029e84828501610265565b91505092915050565b600082825260208201905092915050565b7f4e6f742074686520636f6e7472616374206f776e657200000000000000000000600082015250565b60006102ee6016836102a7565b91506102f9826102b8565b602082019050919050565b6000602082019050818103600083015261031d816102e1565b905091905056fea264697066735822122017c6ad59f175e8b093217a5097046fd9d5ae9463e9d05db6edbde2eab121ded664736f6c634300080d0033",
                "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063303e715f146100465780638da5cb5b14610064578063c086591c14610082575b600080fd5b61004e61009e565b60405161005b91906101d2565b60405180910390f35b61006c6100b1565b604051610079919061022e565b60405180910390f35b61009c6004803603810190610097919061027a565b6100d5565b005b600060149054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a90610304565b60405180910390fd5b80600060146101000a81548160ff0219169083151502179055507f7cf6f27166635ca7de380792e502673562c065b49455b821093b491067cea553816040516101ac91906101d2565b60405180910390a150565b60008115159050919050565b6101cc816101b7565b82525050565b60006020820190506101e760008301846101c3565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610218826101ed565b9050919050565b6102288161020d565b82525050565b6000602082019050610243600083018461021f565b92915050565b600080fd5b610257816101b7565b811461026257600080fd5b50565b6000813590506102748161024e565b92915050565b6000602082840312156102905761028f610249565b5b600061029e84828501610265565b91505092915050565b600082825260208201905092915050565b7f4e6f742074686520636f6e7472616374206f776e657200000000000000000000600082015250565b60006102ee6016836102a7565b91506102f9826102b8565b602082019050919050565b6000602082019050818103600083015261031d816102e1565b905091905056fea264697066735822122017c6ad59f175e8b093217a5097046fd9d5ae9463e9d05db6edbde2eab121ded664736f6c634300080d0033",
                "immutableReferences": {},
                "generatedSources": [],
                "deployedGeneratedSources": [
                  {
                    "ast": {
                      "nodeType": "YulBlock",
                      "src": "0:3084:4",
                      "statements": [
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "49:48:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "59:32:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "84:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "77:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "77:13:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "70:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "70:21:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "59:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_bool",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "31:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "41:7:4",
                              "type": ""
                            }
                          ],
                          "src": "7:90:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "162:50:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "179:3:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "199:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "cleanup_t_bool",
                                        "nodeType": "YulIdentifier",
                                        "src": "184:14:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "184:21:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "172:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "172:34:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "172:34:4"
                              }
                            ]
                          },
                          "name": "abi_encode_t_bool_to_t_bool_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "150:5:4",
                              "type": ""
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "157:3:4",
                              "type": ""
                            }
                          ],
                          "src": "103:109:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "310:118:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "320:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "332:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "343:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "328:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "328:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "320:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "394:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "407:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "418:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "403:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "403:17:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_bool_to_t_bool_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "356:37:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "356:65:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "356:65:4"
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "282:9:4",
                              "type": ""
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "294:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "305:4:4",
                              "type": ""
                            }
                          ],
                          "src": "218:210:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "479:81:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "489:65:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "504:5:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "511:42:4",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "500:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "500:54:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "489:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_uint160",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "461:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "471:7:4",
                              "type": ""
                            }
                          ],
                          "src": "434:126:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "611:51:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "621:35:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "650:5:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint160",
                                    "nodeType": "YulIdentifier",
                                    "src": "632:17:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "632:24:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "621:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "593:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "603:7:4",
                              "type": ""
                            }
                          ],
                          "src": "566:96:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "733:53:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "750:3:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "773:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "cleanup_t_address",
                                        "nodeType": "YulIdentifier",
                                        "src": "755:17:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "755:24:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "743:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "743:37:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "743:37:4"
                              }
                            ]
                          },
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "721:5:4",
                              "type": ""
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "728:3:4",
                              "type": ""
                            }
                          ],
                          "src": "668:118:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "890:124:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "900:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "912:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "923:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "908:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "908:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "900:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "980:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "993:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1004:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "989:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "989:17:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_address_to_t_address_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "936:43:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "936:71:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "936:71:4"
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "862:9:4",
                              "type": ""
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "874:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "885:4:4",
                              "type": ""
                            }
                          ],
                          "src": "792:222:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1060:35:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1070:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1086:2:4",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "1080:5:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1080:9:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "memPtr",
                                    "nodeType": "YulIdentifier",
                                    "src": "1070:6:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "allocate_unbounded",
                          "nodeType": "YulFunctionDefinition",
                          "returnVariables": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "1053:6:4",
                              "type": ""
                            }
                          ],
                          "src": "1020:75:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1190:28:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1207:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1210:1:4",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "revert",
                                    "nodeType": "YulIdentifier",
                                    "src": "1200:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1200:12:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1200:12:4"
                              }
                            ]
                          },
                          "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                          "nodeType": "YulFunctionDefinition",
                          "src": "1101:117:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1313:28:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1330:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1333:1:4",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "revert",
                                    "nodeType": "YulIdentifier",
                                    "src": "1323:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1323:12:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1323:12:4"
                              }
                            ]
                          },
                          "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                          "nodeType": "YulFunctionDefinition",
                          "src": "1224:117:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1387:76:4",
                            "statements": [
                              {
                                "body": {
                                  "nodeType": "YulBlock",
                                  "src": "1441:16:4",
                                  "statements": [
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "1450:1:4",
                                            "type": "",
                                            "value": "0"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "1453:1:4",
                                            "type": "",
                                            "value": "0"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "revert",
                                          "nodeType": "YulIdentifier",
                                          "src": "1443:6:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1443:12:4"
                                      },
                                      "nodeType": "YulExpressionStatement",
                                      "src": "1443:12:4"
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "1410:5:4"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "value",
                                              "nodeType": "YulIdentifier",
                                              "src": "1432:5:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "cleanup_t_bool",
                                            "nodeType": "YulIdentifier",
                                            "src": "1417:14:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1417:21:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "1407:2:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1407:32:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1400:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1400:40:4"
                                },
                                "nodeType": "YulIf",
                                "src": "1397:60:4"
                              }
                            ]
                          },
                          "name": "validator_revert_t_bool",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1380:5:4",
                              "type": ""
                            }
                          ],
                          "src": "1347:116:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1518:84:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1528:29:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "1550:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "calldataload",
                                    "nodeType": "YulIdentifier",
                                    "src": "1537:12:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1537:20:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1528:5:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "1590:5:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "validator_revert_t_bool",
                                    "nodeType": "YulIdentifier",
                                    "src": "1566:23:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1566:30:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1566:30:4"
                              }
                            ]
                          },
                          "name": "abi_decode_t_bool",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "1496:6:4",
                              "type": ""
                            },
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "1504:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1512:5:4",
                              "type": ""
                            }
                          ],
                          "src": "1469:133:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1671:260:4",
                            "statements": [
                              {
                                "body": {
                                  "nodeType": "YulBlock",
                                  "src": "1717:83:4",
                                  "statements": [
                                    {
                                      "expression": {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                          "nodeType": "YulIdentifier",
                                          "src": "1719:77:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1719:79:4"
                                      },
                                      "nodeType": "YulExpressionStatement",
                                      "src": "1719:79:4"
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "dataEnd",
                                          "nodeType": "YulIdentifier",
                                          "src": "1692:7:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "1701:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "1688:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1688:23:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1713:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "slt",
                                    "nodeType": "YulIdentifier",
                                    "src": "1684:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1684:32:4"
                                },
                                "nodeType": "YulIf",
                                "src": "1681:119:4"
                              },
                              {
                                "nodeType": "YulBlock",
                                "src": "1810:114:4",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "1825:15:4",
                                    "value": {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1839:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    "variables": [
                                      {
                                        "name": "offset",
                                        "nodeType": "YulTypedName",
                                        "src": "1829:6:4",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "1854:60:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "headStart",
                                              "nodeType": "YulIdentifier",
                                              "src": "1886:9:4"
                                            },
                                            {
                                              "name": "offset",
                                              "nodeType": "YulIdentifier",
                                              "src": "1897:6:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1882:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1882:22:4"
                                        },
                                        {
                                          "name": "dataEnd",
                                          "nodeType": "YulIdentifier",
                                          "src": "1906:7:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "abi_decode_t_bool",
                                        "nodeType": "YulIdentifier",
                                        "src": "1864:17:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1864:50:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value0",
                                        "nodeType": "YulIdentifier",
                                        "src": "1854:6:4"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_decode_tuple_t_bool",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "1641:9:4",
                              "type": ""
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulTypedName",
                              "src": "1652:7:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "1664:6:4",
                              "type": ""
                            }
                          ],
                          "src": "1608:323:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2033:73:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2050:3:4"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "2055:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2043:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2043:19:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2043:19:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "2071:29:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2090:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2095:4:4",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2086:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2086:14:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "updated_pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "2071:11:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "2005:3:4",
                              "type": ""
                            },
                            {
                              "name": "length",
                              "nodeType": "YulTypedName",
                              "src": "2010:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "updated_pos",
                              "nodeType": "YulTypedName",
                              "src": "2021:11:4",
                              "type": ""
                            }
                          ],
                          "src": "1937:169:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2218:66:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "memPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "2240:6:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2248:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2236:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2236:14:4"
                                    },
                                    {
                                      "hexValue": "4e6f742074686520636f6e7472616374206f776e6572",
                                      "kind": "string",
                                      "nodeType": "YulLiteral",
                                      "src": "2252:24:4",
                                      "type": "",
                                      "value": "Not the contract owner"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2229:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2229:48:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2229:48:4"
                              }
                            ]
                          },
                          "name": "store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "2210:6:4",
                              "type": ""
                            }
                          ],
                          "src": "2112:172:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2436:220:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2446:74:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2512:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2517:2:4",
                                      "type": "",
                                      "value": "22"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "2453:58:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2453:67:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "2446:3:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2618:3:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                                    "nodeType": "YulIdentifier",
                                    "src": "2529:88:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2529:93:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2529:93:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "2631:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2642:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2647:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2638:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2638:12:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "end",
                                    "nodeType": "YulIdentifier",
                                    "src": "2631:3:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "2424:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "2432:3:4",
                              "type": ""
                            }
                          ],
                          "src": "2290:366:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2833:248:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2843:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "2855:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2866:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2851:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2851:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "2843:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "2890:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2901:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2886:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2886:17:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "tail",
                                          "nodeType": "YulIdentifier",
                                          "src": "2909:4:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "2915:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "2905:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2905:20:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2879:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2879:47:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2879:47:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "2935:139:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "tail",
                                      "nodeType": "YulIdentifier",
                                      "src": "3069:4:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "2943:124:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2943:131:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "2935:4:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8__to_t_string_memory_ptr__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "2813:9:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "2828:4:4",
                              "type": ""
                            }
                          ],
                          "src": "2662:419:4"
                        }
                      ]
                    },
                    "contents": "{\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8(memPtr) {\n\n        mstore(add(memPtr, 0), \"Not the contract owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n        store_literal_in_memory_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
                    "id": 4,
                    "language": "Yul",
                    "name": "#utility.yul"
                  }
                ],
                "sourceMap": "61:488:2:-:0;;;197:83;;;;;;;;;;230:10;222:5;;:18;;;;;;;;;;;;;;;;;;268:4;251:14;;:21;;;;;;;;;;;;;;;;;;61:488;;;;;;",
                "deployedSourceMap": "61:488:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;112:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;85:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;402:144;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;112:26;;;;;;;;;;;;;:::o;85:20::-;;;;;;;;;;;;:::o;402:144::-;342:5;;;;;;;;;;328:19;;:10;:19;;;320:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;485:7:::1;468:14;;:24;;;;;;;;;;;;;;;;;;508:30;530:7;508:30;;;;;;:::i;:::-;;;;;;;;402:144:::0;:::o;7:90:4:-;41:7;84:5;77:13;70:21;59:32;;7:90;;;:::o;103:109::-;184:21;199:5;184:21;:::i;:::-;179:3;172:34;103:109;;:::o;218:210::-;305:4;343:2;332:9;328:18;320:26;;356:65;418:1;407:9;403:17;394:6;356:65;:::i;:::-;218:210;;;;:::o;434:126::-;471:7;511:42;504:5;500:54;489:65;;434:126;;;:::o;566:96::-;603:7;632:24;650:5;632:24;:::i;:::-;621:35;;566:96;;;:::o;668:118::-;755:24;773:5;755:24;:::i;:::-;750:3;743:37;668:118;;:::o;792:222::-;885:4;923:2;912:9;908:18;900:26;;936:71;1004:1;993:9;989:17;980:6;936:71;:::i;:::-;792:222;;;;:::o;1101:117::-;1210:1;1207;1200:12;1347:116;1417:21;1432:5;1417:21;:::i;:::-;1410:5;1407:32;1397:60;;1453:1;1450;1443:12;1397:60;1347:116;:::o;1469:133::-;1512:5;1550:6;1537:20;1528:29;;1566:30;1590:5;1566:30;:::i;:::-;1469:133;;;;:::o;1608:323::-;1664:6;1713:2;1701:9;1692:7;1688:23;1684:32;1681:119;;;1719:79;;:::i;:::-;1681:119;1839:1;1864:50;1906:7;1897:6;1886:9;1882:22;1864:50;:::i;:::-;1854:60;;1810:114;1608:323;;;;:::o;1937:169::-;2021:11;2055:6;2050:3;2043:19;2095:4;2090:3;2086:14;2071:29;;1937:169;;;;:::o;2112:172::-;2252:24;2248:1;2240:6;2236:14;2229:48;2112:172;:::o;2290:366::-;2432:3;2453:67;2517:2;2512:3;2453:67;:::i;:::-;2446:74;;2529:93;2618:3;2529:93;:::i;:::-;2647:2;2642:3;2638:12;2631:19;;2290:366;;;:::o;2662:419::-;2828:4;2866:2;2855:9;2851:18;2843:26;;2915:9;2909:4;2905:20;2901:1;2890:9;2886:17;2879:47;2943:131;3069:4;2943:131;:::i;:::-;2935:139;;2662:419;;;:::o",
                "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.13;\r\n\r\ncontract privacy {\r\n    address public owner;\r\n    bool public privacyEnabled;\r\n\r\n    event PrivacySettingChanged(bool enabled);\r\n\r\n    constructor() {\r\n        owner = msg.sender;\r\n        privacyEnabled = true;\r\n    }\r\n\r\n    modifier onlyOwner() {\r\n        require(msg.sender == owner, \"Not the contract owner\");\r\n        _;\r\n    }\r\n\r\n    function setDataPrivacy(bool enabled) public onlyOwner {\r\n        privacyEnabled = enabled;\r\n        emit PrivacySettingChanged(enabled);\r\n    }\r\n}\r\n",
                "sourcePath": "C:\\Users\\Aksha\\Desktop\\BlockLock\\codeutsaveme\\contracts\\privacy.sol",
                "ast": {
                  "absolutePath": "project:/contracts/privacy.sol",
                  "exportedSymbols": {
                    "privacy": [
                      261
                    ]
                  },
                  "id": 262,
                  "license": "MIT",
                  "nodeType": "SourceUnit",
                  "nodes": [
                    {
                      "id": 211,
                      "literals": [
                        "solidity",
                        "^",
                        "0.8",
                        ".13"
                      ],
                      "nodeType": "PragmaDirective",
                      "src": "33:24:2"
                    },
                    {
                      "abstract": false,
                      "baseContracts": [],
                      "canonicalName": "privacy",
                      "contractDependencies": [],
                      "contractKind": "contract",
                      "fullyImplemented": true,
                      "id": 261,
                      "linearizedBaseContracts": [
                        261
                      ],
                      "name": "privacy",
                      "nameLocation": "70:7:2",
                      "nodeType": "ContractDefinition",
                      "nodes": [
                        {
                          "constant": false,
                          "functionSelector": "8da5cb5b",
                          "id": 213,
                          "mutability": "mutable",
                          "name": "owner",
                          "nameLocation": "100:5:2",
                          "nodeType": "VariableDeclaration",
                          "scope": 261,
                          "src": "85:20:2",
                          "stateVariable": true,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "typeName": {
                            "id": 212,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "85:7:2",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "visibility": "public"
                        },
                        {
                          "constant": false,
                          "functionSelector": "303e715f",
                          "id": 215,
                          "mutability": "mutable",
                          "name": "privacyEnabled",
                          "nameLocation": "124:14:2",
                          "nodeType": "VariableDeclaration",
                          "scope": 261,
                          "src": "112:26:2",
                          "stateVariable": true,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "typeName": {
                            "id": 214,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "112:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "visibility": "public"
                        },
                        {
                          "anonymous": false,
                          "eventSelector": "7cf6f27166635ca7de380792e502673562c065b49455b821093b491067cea553",
                          "id": 219,
                          "name": "PrivacySettingChanged",
                          "nameLocation": "153:21:2",
                          "nodeType": "EventDefinition",
                          "parameters": {
                            "id": 218,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 217,
                                "indexed": false,
                                "mutability": "mutable",
                                "name": "enabled",
                                "nameLocation": "180:7:2",
                                "nodeType": "VariableDeclaration",
                                "scope": 219,
                                "src": "175:12:2",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "typeName": {
                                  "id": 216,
                                  "name": "bool",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "175:4:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "174:14:2"
                          },
                          "src": "147:42:2"
                        },
                        {
                          "body": {
                            "id": 231,
                            "nodeType": "Block",
                            "src": "211:69:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 225,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "id": 222,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 213,
                                    "src": "222:5:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "expression": {
                                      "id": 223,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "230:3:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 224,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "230:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "222:18:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 226,
                                "nodeType": "ExpressionStatement",
                                "src": "222:18:2"
                              },
                              {
                                "expression": {
                                  "id": 229,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "id": 227,
                                    "name": "privacyEnabled",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 215,
                                    "src": "251:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "hexValue": "74727565",
                                    "id": 228,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "268:4:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  "src": "251:21:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 230,
                                "nodeType": "ExpressionStatement",
                                "src": "251:21:2"
                              }
                            ]
                          },
                          "id": 232,
                          "implemented": true,
                          "kind": "constructor",
                          "modifiers": [],
                          "name": "",
                          "nameLocation": "-1:-1:-1",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 220,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "208:2:2"
                          },
                          "returnParameters": {
                            "id": 221,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "211:0:2"
                          },
                          "scope": 261,
                          "src": "197:83:2",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "public"
                        },
                        {
                          "body": {
                            "id": 243,
                            "nodeType": "Block",
                            "src": "309:85:2",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "id": 238,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "id": 235,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967281,
                                          "src": "328:3:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 236,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "328:10:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "id": 237,
                                        "name": "owner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 213,
                                        "src": "342:5:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "src": "328:19:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "hexValue": "4e6f742074686520636f6e7472616374206f776e6572",
                                      "id": 239,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "349:24:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                                        "typeString": "literal_string \"Not the contract owner\""
                                      },
                                      "value": "Not the contract owner"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_f40f899e3d827919ff313c4325c1ece4db0c8c5fc3251000e1c0632edd92ebc8",
                                        "typeString": "literal_string \"Not the contract owner\""
                                      }
                                    ],
                                    "id": 234,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      4294967278,
                                      4294967278
                                    ],
                                    "referencedDeclaration": 4294967278,
                                    "src": "320:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 240,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "320:54:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 241,
                                "nodeType": "ExpressionStatement",
                                "src": "320:54:2"
                              },
                              {
                                "id": 242,
                                "nodeType": "PlaceholderStatement",
                                "src": "385:1:2"
                              }
                            ]
                          },
                          "id": 244,
                          "name": "onlyOwner",
                          "nameLocation": "297:9:2",
                          "nodeType": "ModifierDefinition",
                          "parameters": {
                            "id": 233,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "306:2:2"
                          },
                          "src": "288:106:2",
                          "virtual": false,
                          "visibility": "internal"
                        },
                        {
                          "body": {
                            "id": 259,
                            "nodeType": "Block",
                            "src": "457:89:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 253,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "id": 251,
                                    "name": "privacyEnabled",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 215,
                                    "src": "468:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "id": 252,
                                    "name": "enabled",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 246,
                                    "src": "485:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "src": "468:24:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 254,
                                "nodeType": "ExpressionStatement",
                                "src": "468:24:2"
                              },
                              {
                                "eventCall": {
                                  "arguments": [
                                    {
                                      "id": 256,
                                      "name": "enabled",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 246,
                                      "src": "530:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "id": 255,
                                    "name": "PrivacySettingChanged",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 219,
                                    "src": "508:21:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                                      "typeString": "function (bool)"
                                    }
                                  },
                                  "id": 257,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "508:30:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 258,
                                "nodeType": "EmitStatement",
                                "src": "503:35:2"
                              }
                            ]
                          },
                          "functionSelector": "c086591c",
                          "id": 260,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [
                            {
                              "id": 249,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                "id": 248,
                                "name": "onlyOwner",
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 244,
                                "src": "447:9:2"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "447:9:2"
                            }
                          ],
                          "name": "setDataPrivacy",
                          "nameLocation": "411:14:2",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 247,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 246,
                                "mutability": "mutable",
                                "name": "enabled",
                                "nameLocation": "431:7:2",
                                "nodeType": "VariableDeclaration",
                                "scope": 260,
                                "src": "426:12:2",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "typeName": {
                                  "id": 245,
                                  "name": "bool",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "426:4:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "425:14:2"
                          },
                          "returnParameters": {
                            "id": 250,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "457:0:2"
                          },
                          "scope": 261,
                          "src": "402:144:2",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "public"
                        }
                      ],
                      "scope": 262,
                      "src": "61:488:2",
                      "usedErrors": []
                    }
                  ],
                  "src": "33:518:2"
                },
                "compiler": {
                  "name": "solc",
                  "version": "0.8.13+commit.abaa5c0e.Emscripten.clang"
                },
                "networks": {
                  "5777": {
                    "events": {},
                    "links": {},
                    "address": "0x4020F692d599Fa323786D959313888E372CFd022",
                    "transactionHash": "0x3af579177602197752bd38bd3a237ddf6c0562bd6a74daf9859fa99b796aaf23"
                  }
                },
                "schemaVersion": "3.4.16",
                "updatedAt": "2024-10-27T02:29:42.656Z",
                "networkType": "ethereum",
                "devdoc": {
                  "kind": "dev",
                  "methods": {},
                  "version": 1
                },
                "userdoc": {
                  "kind": "user",
                  "methods": {},
                  "version": 1
                }
              }
        ];
        const accessFinalABI = [
            {
                "contractName": "AccessControl",
                "abi": [
                  {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "personnel",
                        "type": "address"
                      }
                    ],
                    "name": "PersonnelRevoked",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "personnel",
                        "type": "address"
                      }
                    ],
                    "name": "PersonnelVerified",
                    "type": "event"
                  },
                  {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "constant": true
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "_personnel",
                        "type": "address"
                      }
                    ],
                    "name": "verifyPersonnel",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "_personnel",
                        "type": "address"
                      }
                    ],
                    "name": "revokePersonnel",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "_personnel",
                        "type": "address"
                      }
                    ],
                    "name": "isVerified",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "constant": true
                  },
                  {
                    "inputs": [],
                    "name": "getOwner",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "constant": true
                  }
                ],
                "metadata": "{\"compiler\":{\"version\":\"0.8.13+commit.abaa5c0e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"personnel\",\"type\":\"address\"}],\"name\":\"PersonnelRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"personnel\",\"type\":\"address\"}],\"name\":\"PersonnelVerified\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_personnel\",\"type\":\"address\"}],\"name\":\"isVerified\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_personnel\",\"type\":\"address\"}],\"name\":\"revokePersonnel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_personnel\",\"type\":\"address\"}],\"name\":\"verifyPersonnel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/accessControl.sol\":\"AccessControl\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/accessControl.sol\":{\"keccak256\":\"0xbf1e84a7550678ee4af5e6e5b1e5fb1775ecea0a997259deb3ab060c34a725d2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a048bb4d875ba1abbcbb6fff9ce8fe25ab3eb50ff8ed54c08cce7d68b0189c1\",\"dweb:/ipfs/QmVTc6Gc2T8SgvmVVvGx3NijwuNTS6BfDKwU5ph52KvFfM\"]}},\"version\":1}",
                "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107b4806100606000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634708e55f1461005c578063615a662814610078578063893d20e8146100945780638da5cb5b146100b2578063b9209e33146100d0575b600080fd5b61007660048036038101906100719190610576565b610100565b005b610092600480360381019061008d9190610576565b6102b8565b005b61009c610470565b6040516100a991906105b2565b60405180910390f35b6100ba610499565b6040516100c791906105b2565b60405180910390f35b6100ea60048036038101906100e59190610576565b6104bd565b6040516100f791906105e8565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461018e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018590610686565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661021a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610211906106f2565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f66457d438f63200ebd1108ca6abdbbc0bd6e9a573ca5c68a2d44eb7b998fc19260405160405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610346576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033d90610686565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156103d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ca9061075e565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fec82f249b04a196dd53e2b215e5d02bc8fa125cb4c2c211ca2353862f2ab2ce260405160405180910390a250565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061054382610518565b9050919050565b61055381610538565b811461055e57600080fd5b50565b6000813590506105708161054a565b92915050565b60006020828403121561058c5761058b610513565b5b600061059a84828501610561565b91505092915050565b6105ac81610538565b82525050565b60006020820190506105c760008301846105a3565b92915050565b60008115159050919050565b6105e2816105cd565b82525050565b60006020820190506105fd60008301846105d9565b92915050565b600082825260208201905092915050565b7f4f6e6c7920746865206f776e65722063616e20706572666f726d20746869732060008201527f616374696f6e0000000000000000000000000000000000000000000000000000602082015250565b6000610670602683610603565b915061067b82610614565b604082019050919050565b6000602082019050818103600083015261069f81610663565b9050919050565b7f506572736f6e6e656c206973206e6f7420766572696669656400000000000000600082015250565b60006106dc601983610603565b91506106e7826106a6565b602082019050919050565b6000602082019050818103600083015261070b816106cf565b9050919050565b7f506572736f6e6e656c20697320616c7265616479207665726966696564000000600082015250565b6000610748601d83610603565b915061075382610712565b602082019050919050565b600060208201905081810360008301526107778161073b565b905091905056fea26469706673582212202b8b769404825f175fe92578185bbef5a460f43d27ca18ef2514dbd1280ba84f64736f6c634300080d0033",
                "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80634708e55f1461005c578063615a662814610078578063893d20e8146100945780638da5cb5b146100b2578063b9209e33146100d0575b600080fd5b61007660048036038101906100719190610576565b610100565b005b610092600480360381019061008d9190610576565b6102b8565b005b61009c610470565b6040516100a991906105b2565b60405180910390f35b6100ba610499565b6040516100c791906105b2565b60405180910390f35b6100ea60048036038101906100e59190610576565b6104bd565b6040516100f791906105e8565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461018e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018590610686565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661021a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610211906106f2565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f66457d438f63200ebd1108ca6abdbbc0bd6e9a573ca5c68a2d44eb7b998fc19260405160405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610346576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033d90610686565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156103d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ca9061075e565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fec82f249b04a196dd53e2b215e5d02bc8fa125cb4c2c211ca2353862f2ab2ce260405160405180910390a250565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061054382610518565b9050919050565b61055381610538565b811461055e57600080fd5b50565b6000813590506105708161054a565b92915050565b60006020828403121561058c5761058b610513565b5b600061059a84828501610561565b91505092915050565b6105ac81610538565b82525050565b60006020820190506105c760008301846105a3565b92915050565b60008115159050919050565b6105e2816105cd565b82525050565b60006020820190506105fd60008301846105d9565b92915050565b600082825260208201905092915050565b7f4f6e6c7920746865206f776e65722063616e20706572666f726d20746869732060008201527f616374696f6e0000000000000000000000000000000000000000000000000000602082015250565b6000610670602683610603565b915061067b82610614565b604082019050919050565b6000602082019050818103600083015261069f81610663565b9050919050565b7f506572736f6e6e656c206973206e6f7420766572696669656400000000000000600082015250565b60006106dc601983610603565b91506106e7826106a6565b602082019050919050565b6000602082019050818103600083015261070b816106cf565b9050919050565b7f506572736f6e6e656c20697320616c7265616479207665726966696564000000600082015250565b6000610748601d83610603565b915061075382610712565b602082019050919050565b600060208201905081810360008301526107778161073b565b905091905056fea26469706673582212202b8b769404825f175fe92578185bbef5a460f43d27ca18ef2514dbd1280ba84f64736f6c634300080d0033",
                "immutableReferences": {},
                "generatedSources": [],
                "deployedGeneratedSources": [
                  {
                    "ast": {
                      "nodeType": "YulBlock",
                      "src": "0:5115:4",
                      "statements": [
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "47:35:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "57:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "73:2:4",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "67:5:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "67:9:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "memPtr",
                                    "nodeType": "YulIdentifier",
                                    "src": "57:6:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "allocate_unbounded",
                          "nodeType": "YulFunctionDefinition",
                          "returnVariables": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "40:6:4",
                              "type": ""
                            }
                          ],
                          "src": "7:75:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "177:28:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "194:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "197:1:4",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "revert",
                                    "nodeType": "YulIdentifier",
                                    "src": "187:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "187:12:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "187:12:4"
                              }
                            ]
                          },
                          "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                          "nodeType": "YulFunctionDefinition",
                          "src": "88:117:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "300:28:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "317:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "320:1:4",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "revert",
                                    "nodeType": "YulIdentifier",
                                    "src": "310:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "310:12:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "310:12:4"
                              }
                            ]
                          },
                          "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                          "nodeType": "YulFunctionDefinition",
                          "src": "211:117:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "379:81:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "389:65:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "404:5:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "411:42:4",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "400:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "400:54:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "389:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_uint160",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "361:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "371:7:4",
                              "type": ""
                            }
                          ],
                          "src": "334:126:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "511:51:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "521:35:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "550:5:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint160",
                                    "nodeType": "YulIdentifier",
                                    "src": "532:17:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "532:24:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "521:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "493:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "503:7:4",
                              "type": ""
                            }
                          ],
                          "src": "466:96:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "611:79:4",
                            "statements": [
                              {
                                "body": {
                                  "nodeType": "YulBlock",
                                  "src": "668:16:4",
                                  "statements": [
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "677:1:4",
                                            "type": "",
                                            "value": "0"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "680:1:4",
                                            "type": "",
                                            "value": "0"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "revert",
                                          "nodeType": "YulIdentifier",
                                          "src": "670:6:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "670:12:4"
                                      },
                                      "nodeType": "YulExpressionStatement",
                                      "src": "670:12:4"
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "634:5:4"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "value",
                                              "nodeType": "YulIdentifier",
                                              "src": "659:5:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "cleanup_t_address",
                                            "nodeType": "YulIdentifier",
                                            "src": "641:17:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "641:24:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "631:2:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "631:35:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "624:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "624:43:4"
                                },
                                "nodeType": "YulIf",
                                "src": "621:63:4"
                              }
                            ]
                          },
                          "name": "validator_revert_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "604:5:4",
                              "type": ""
                            }
                          ],
                          "src": "568:122:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "748:87:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "758:29:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "780:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "calldataload",
                                    "nodeType": "YulIdentifier",
                                    "src": "767:12:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "767:20:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "758:5:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "823:5:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "validator_revert_t_address",
                                    "nodeType": "YulIdentifier",
                                    "src": "796:26:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "796:33:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "796:33:4"
                              }
                            ]
                          },
                          "name": "abi_decode_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "726:6:4",
                              "type": ""
                            },
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "734:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "742:5:4",
                              "type": ""
                            }
                          ],
                          "src": "696:139:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "907:263:4",
                            "statements": [
                              {
                                "body": {
                                  "nodeType": "YulBlock",
                                  "src": "953:83:4",
                                  "statements": [
                                    {
                                      "expression": {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                          "nodeType": "YulIdentifier",
                                          "src": "955:77:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "955:79:4"
                                      },
                                      "nodeType": "YulExpressionStatement",
                                      "src": "955:79:4"
                                    }
                                  ]
                                },
                                "condition": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "dataEnd",
                                          "nodeType": "YulIdentifier",
                                          "src": "928:7:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "937:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "924:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "924:23:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "949:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "slt",
                                    "nodeType": "YulIdentifier",
                                    "src": "920:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "920:32:4"
                                },
                                "nodeType": "YulIf",
                                "src": "917:119:4"
                              },
                              {
                                "nodeType": "YulBlock",
                                "src": "1046:117:4",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "1061:15:4",
                                    "value": {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1075:1:4",
                                      "type": "",
                                      "value": "0"
                                    },
                                    "variables": [
                                      {
                                        "name": "offset",
                                        "nodeType": "YulTypedName",
                                        "src": "1065:6:4",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "1090:63:4",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "headStart",
                                              "nodeType": "YulIdentifier",
                                              "src": "1125:9:4"
                                            },
                                            {
                                              "name": "offset",
                                              "nodeType": "YulIdentifier",
                                              "src": "1136:6:4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1121:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1121:22:4"
                                        },
                                        {
                                          "name": "dataEnd",
                                          "nodeType": "YulIdentifier",
                                          "src": "1145:7:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "abi_decode_t_address",
                                        "nodeType": "YulIdentifier",
                                        "src": "1100:20:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1100:53:4"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value0",
                                        "nodeType": "YulIdentifier",
                                        "src": "1090:6:4"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_decode_tuple_t_address",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "877:9:4",
                              "type": ""
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulTypedName",
                              "src": "888:7:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "900:6:4",
                              "type": ""
                            }
                          ],
                          "src": "841:329:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1241:53:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "1258:3:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "1281:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "cleanup_t_address",
                                        "nodeType": "YulIdentifier",
                                        "src": "1263:17:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1263:24:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "1251:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1251:37:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1251:37:4"
                              }
                            ]
                          },
                          "name": "abi_encode_t_address_to_t_address_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1229:5:4",
                              "type": ""
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "1236:3:4",
                              "type": ""
                            }
                          ],
                          "src": "1176:118:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1398:124:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1408:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "1420:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1431:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1416:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1416:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "1408:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "1488:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "1501:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1512:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "1497:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1497:17:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_address_to_t_address_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "1444:43:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1444:71:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1444:71:4"
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "1370:9:4",
                              "type": ""
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "1382:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "1393:4:4",
                              "type": ""
                            }
                          ],
                          "src": "1300:222:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1570:48:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1580:32:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "1605:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "1598:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1598:13:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1591:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1591:21:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "cleaned",
                                    "nodeType": "YulIdentifier",
                                    "src": "1580:7:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "cleanup_t_bool",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1552:5:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "cleaned",
                              "nodeType": "YulTypedName",
                              "src": "1562:7:4",
                              "type": ""
                            }
                          ],
                          "src": "1528:90:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1683:50:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "1700:3:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "1720:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "cleanup_t_bool",
                                        "nodeType": "YulIdentifier",
                                        "src": "1705:14:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1705:21:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "1693:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1693:34:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1693:34:4"
                              }
                            ]
                          },
                          "name": "abi_encode_t_bool_to_t_bool_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "value",
                              "nodeType": "YulTypedName",
                              "src": "1671:5:4",
                              "type": ""
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "1678:3:4",
                              "type": ""
                            }
                          ],
                          "src": "1624:109:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1831:118:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1841:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "1853:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1864:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1849:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1849:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "1841:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "1915:6:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "1928:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1939:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "1924:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1924:17:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_bool_to_t_bool_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "1877:37:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1877:65:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1877:65:4"
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "1803:9:4",
                              "type": ""
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulTypedName",
                              "src": "1815:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "1826:4:4",
                              "type": ""
                            }
                          ],
                          "src": "1739:210:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2051:73:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2068:3:4"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "2073:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2061:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2061:19:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2061:19:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "2089:29:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2108:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2113:4:4",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2104:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2104:14:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "updated_pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "2089:11:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "2023:3:4",
                              "type": ""
                            },
                            {
                              "name": "length",
                              "nodeType": "YulTypedName",
                              "src": "2028:6:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "updated_pos",
                              "nodeType": "YulTypedName",
                              "src": "2039:11:4",
                              "type": ""
                            }
                          ],
                          "src": "1955:169:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2236:119:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "memPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "2258:6:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2266:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2254:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2254:14:4"
                                    },
                                    {
                                      "hexValue": "4f6e6c7920746865206f776e65722063616e20706572666f726d207468697320",
                                      "kind": "string",
                                      "nodeType": "YulLiteral",
                                      "src": "2270:34:4",
                                      "type": "",
                                      "value": "Only the owner can perform this "
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2247:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2247:58:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2247:58:4"
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "memPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "2326:6:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2334:2:4",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2322:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2322:15:4"
                                    },
                                    {
                                      "hexValue": "616374696f6e",
                                      "kind": "string",
                                      "nodeType": "YulLiteral",
                                      "src": "2339:8:4",
                                      "type": "",
                                      "value": "action"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2315:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2315:33:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2315:33:4"
                              }
                            ]
                          },
                          "name": "store_literal_in_memory_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "2228:6:4",
                              "type": ""
                            }
                          ],
                          "src": "2130:225:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2507:220:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2517:74:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2583:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2588:2:4",
                                      "type": "",
                                      "value": "38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "2524:58:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2524:67:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "2517:3:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2689:3:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "store_literal_in_memory_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5",
                                    "nodeType": "YulIdentifier",
                                    "src": "2600:88:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2600:93:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2600:93:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "2702:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2713:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2718:2:4",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2709:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2709:12:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "end",
                                    "nodeType": "YulIdentifier",
                                    "src": "2702:3:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5_to_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "2495:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "2503:3:4",
                              "type": ""
                            }
                          ],
                          "src": "2361:366:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2904:248:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2914:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "2926:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2937:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2922:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2922:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "2914:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "2961:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2972:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2957:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2957:17:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "tail",
                                          "nodeType": "YulIdentifier",
                                          "src": "2980:4:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "2986:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "2976:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2976:20:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2950:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2950:47:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2950:47:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "3006:139:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "tail",
                                      "nodeType": "YulIdentifier",
                                      "src": "3140:4:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5_to_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "3014:124:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3014:131:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "3006:4:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5__to_t_string_memory_ptr__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "2884:9:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "2899:4:4",
                              "type": ""
                            }
                          ],
                          "src": "2733:419:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3264:69:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "memPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "3286:6:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3294:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "3282:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3282:14:4"
                                    },
                                    {
                                      "hexValue": "506572736f6e6e656c206973206e6f74207665726966696564",
                                      "kind": "string",
                                      "nodeType": "YulLiteral",
                                      "src": "3298:27:4",
                                      "type": "",
                                      "value": "Personnel is not verified"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "3275:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3275:51:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3275:51:4"
                              }
                            ]
                          },
                          "name": "store_literal_in_memory_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "3256:6:4",
                              "type": ""
                            }
                          ],
                          "src": "3158:175:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3485:220:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "3495:74:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "3561:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3566:2:4",
                                      "type": "",
                                      "value": "25"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "3502:58:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3502:67:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "3495:3:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "3667:3:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "store_literal_in_memory_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415",
                                    "nodeType": "YulIdentifier",
                                    "src": "3578:88:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3578:93:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3578:93:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "3680:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "3691:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3696:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3687:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3687:12:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "end",
                                    "nodeType": "YulIdentifier",
                                    "src": "3680:3:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415_to_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "3473:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "3481:3:4",
                              "type": ""
                            }
                          ],
                          "src": "3339:366:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3882:248:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "3892:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "3904:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3915:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3900:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3900:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "3892:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "3939:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3950:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "3935:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3935:17:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "tail",
                                          "nodeType": "YulIdentifier",
                                          "src": "3958:4:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "3964:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "3954:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3954:20:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "3928:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3928:47:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3928:47:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "3984:139:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "tail",
                                      "nodeType": "YulIdentifier",
                                      "src": "4118:4:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415_to_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "3992:124:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3992:131:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "3984:4:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415__to_t_string_memory_ptr__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "3862:9:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "3877:4:4",
                              "type": ""
                            }
                          ],
                          "src": "3711:419:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "4242:73:4",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "memPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "4264:6:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4272:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4260:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4260:14:4"
                                    },
                                    {
                                      "hexValue": "506572736f6e6e656c20697320616c7265616479207665726966696564",
                                      "kind": "string",
                                      "nodeType": "YulLiteral",
                                      "src": "4276:31:4",
                                      "type": "",
                                      "value": "Personnel is already verified"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "4253:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4253:55:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "4253:55:4"
                              }
                            ]
                          },
                          "name": "store_literal_in_memory_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulTypedName",
                              "src": "4234:6:4",
                              "type": ""
                            }
                          ],
                          "src": "4136:179:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "4467:220:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "4477:74:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "4543:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4548:2:4",
                                      "type": "",
                                      "value": "29"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "4484:58:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4484:67:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "pos",
                                    "nodeType": "YulIdentifier",
                                    "src": "4477:3:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "4649:3:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "store_literal_in_memory_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc",
                                    "nodeType": "YulIdentifier",
                                    "src": "4560:88:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4560:93:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "4560:93:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "4662:19:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "4673:3:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4678:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4669:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4669:12:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "end",
                                    "nodeType": "YulIdentifier",
                                    "src": "4662:3:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc_to_t_string_memory_ptr_fromStack",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "pos",
                              "nodeType": "YulTypedName",
                              "src": "4455:3:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "end",
                              "nodeType": "YulTypedName",
                              "src": "4463:3:4",
                              "type": ""
                            }
                          ],
                          "src": "4321:366:4"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "4864:248:4",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "4874:26:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4886:9:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4897:2:4",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4882:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4882:18:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "4874:4:4"
                                  }
                                ]
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "4921:9:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4932:1:4",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4917:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4917:17:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "tail",
                                          "nodeType": "YulIdentifier",
                                          "src": "4940:4:4"
                                        },
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "4946:9:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "4936:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4936:20:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "4910:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4910:47:4"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "4910:47:4"
                              },
                              {
                                "nodeType": "YulAssignment",
                                "src": "4966:139:4",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "tail",
                                      "nodeType": "YulIdentifier",
                                      "src": "5100:4:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "abi_encode_t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc_to_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulIdentifier",
                                    "src": "4974:124:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4974:131:4"
                                },
                                "variableNames": [
                                  {
                                    "name": "tail",
                                    "nodeType": "YulIdentifier",
                                    "src": "4966:4:4"
                                  }
                                ]
                              }
                            ]
                          },
                          "name": "abi_encode_tuple_t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc__to_t_string_memory_ptr__fromStack_reversed",
                          "nodeType": "YulFunctionDefinition",
                          "parameters": [
                            {
                              "name": "headStart",
                              "nodeType": "YulTypedName",
                              "src": "4844:9:4",
                              "type": ""
                            }
                          ],
                          "returnVariables": [
                            {
                              "name": "tail",
                              "nodeType": "YulTypedName",
                              "src": "4859:4:4",
                              "type": ""
                            }
                          ],
                          "src": "4693:419:4"
                        }
                      ]
                    },
                    "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5(memPtr) {\n\n        mstore(add(memPtr, 0), \"Only the owner can perform this \")\n\n        mstore(add(memPtr, 32), \"action\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415(memPtr) {\n\n        mstore(add(memPtr, 0), \"Personnel is not verified\")\n\n    }\n\n    function abi_encode_t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc(memPtr) {\n\n        mstore(add(memPtr, 0), \"Personnel is already verified\")\n\n    }\n\n    function abi_encode_t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
                    "id": 4,
                    "language": "Yul",
                    "name": "#utility.yul"
                  }
                ],
                "sourceMap": "61:1489:0:-:0;;;533:92;;;;;;;;;;566:10;558:5;;:18;;;;;;;;;;;;;;;;;;61:1489;;;;;;",
                "deployedSourceMap": "61:1489:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;979:242;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;676:247;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1464:83;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;91:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1282:124;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;979:242;457:5;;;;;;;;;;443:19;;:10;:19;;;435:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;1062:17:::1;:29;1080:10;1062:29;;;;;;;;;;;;;;;;;;;;;;;;;1054:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;1164:5;1132:17;:29;1150:10;1132:29;;;;;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;1202:10;1185:28;;;;;;;;;;;;979:242:::0;:::o;676:247::-;457:5;;;;;;;;;;443:19;;:10;:19;;;435:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;760:17:::1;:29;778:10;760:29;;;;;;;;;;;;;;;;;;;;;;;;;759:30;751:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;866:4;834:17:::0;:29:::1;852:10;834:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;904:10;886:29;;;;;;;;;;;;676:247:::0;:::o;1464:83::-;1507:7;1534:5;;;;;;;;;;;1527:12;;1464:83;:::o;91:20::-;;;;;;;;;;;;:::o;1282:124::-;1345:4;1369:17;:29;1387:10;1369:29;;;;;;;;;;;;;;;;;;;;;;;;;1362:36;;1282:124;;;:::o;88:117:4:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:329::-;900:6;949:2;937:9;928:7;924:23;920:32;917:119;;;955:79;;:::i;:::-;917:119;1075:1;1100:53;1145:7;1136:6;1125:9;1121:22;1100:53;:::i;:::-;1090:63;;1046:117;841:329;;;;:::o;1176:118::-;1263:24;1281:5;1263:24;:::i;:::-;1258:3;1251:37;1176:118;;:::o;1300:222::-;1393:4;1431:2;1420:9;1416:18;1408:26;;1444:71;1512:1;1501:9;1497:17;1488:6;1444:71;:::i;:::-;1300:222;;;;:::o;1528:90::-;1562:7;1605:5;1598:13;1591:21;1580:32;;1528:90;;;:::o;1624:109::-;1705:21;1720:5;1705:21;:::i;:::-;1700:3;1693:34;1624:109;;:::o;1739:210::-;1826:4;1864:2;1853:9;1849:18;1841:26;;1877:65;1939:1;1928:9;1924:17;1915:6;1877:65;:::i;:::-;1739:210;;;;:::o;1955:169::-;2039:11;2073:6;2068:3;2061:19;2113:4;2108:3;2104:14;2089:29;;1955:169;;;;:::o;2130:225::-;2270:34;2266:1;2258:6;2254:14;2247:58;2339:8;2334:2;2326:6;2322:15;2315:33;2130:225;:::o;2361:366::-;2503:3;2524:67;2588:2;2583:3;2524:67;:::i;:::-;2517:74;;2600:93;2689:3;2600:93;:::i;:::-;2718:2;2713:3;2709:12;2702:19;;2361:366;;;:::o;2733:419::-;2899:4;2937:2;2926:9;2922:18;2914:26;;2986:9;2980:4;2976:20;2972:1;2961:9;2957:17;2950:47;3014:131;3140:4;3014:131;:::i;:::-;3006:139;;2733:419;;;:::o;3158:175::-;3298:27;3294:1;3286:6;3282:14;3275:51;3158:175;:::o;3339:366::-;3481:3;3502:67;3566:2;3561:3;3502:67;:::i;:::-;3495:74;;3578:93;3667:3;3578:93;:::i;:::-;3696:2;3691:3;3687:12;3680:19;;3339:366;;;:::o;3711:419::-;3877:4;3915:2;3904:9;3900:18;3892:26;;3964:9;3958:4;3954:20;3950:1;3939:9;3935:17;3928:47;3992:131;4118:4;3992:131;:::i;:::-;3984:139;;3711:419;;;:::o;4136:179::-;4276:31;4272:1;4264:6;4260:14;4253:55;4136:179;:::o;4321:366::-;4463:3;4484:67;4548:2;4543:3;4484:67;:::i;:::-;4477:74;;4560:93;4649:3;4560:93;:::i;:::-;4678:2;4673:3;4669:12;4662:19;;4321:366;;;:::o;4693:419::-;4859:4;4897:2;4886:9;4882:18;4874:26;;4946:9;4940:4;4936:20;4932:1;4921:9;4917:17;4910:47;4974:131;5100:4;4974:131;:::i;:::-;4966:139;;4693:419;;;:::o",
                "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.13;\r\n\r\ncontract AccessControl {\r\n    address public owner; // Owner of the contract\r\n    mapping(address => bool) private verifiedPersonnel; // Mapping to track verified personnel\r\n    event PersonnelVerified(address indexed personnel);\r\n    event PersonnelRevoked(address indexed personnel);\r\n\r\n    // Modifier to restrict access to the owner\r\n    modifier onlyOwner() {\r\n        require(msg.sender == owner, \"Only the owner can perform this action\");\r\n        _;\r\n    }\r\n\r\n    constructor() {\r\n        owner = msg.sender; // Set the contract creator as the owner\r\n    }\r\n\r\n    // Function to verify a new personnel\r\n    function verifyPersonnel(address _personnel) external onlyOwner {\r\n        require(!verifiedPersonnel[_personnel], \"Personnel is already verified\");\r\n        verifiedPersonnel[_personnel] = true;\r\n        emit PersonnelVerified(_personnel);\r\n    }\r\n\r\n    // Function to revoke a personnel's access\r\n    function revokePersonnel(address _personnel) external onlyOwner {\r\n        require(verifiedPersonnel[_personnel], \"Personnel is not verified\");\r\n        verifiedPersonnel[_personnel] = false;\r\n        emit PersonnelRevoked(_personnel);\r\n    }\r\n\r\n    // Function to check if a personnel is verified\r\n    function isVerified(address _personnel) external view returns (bool) {\r\n        return verifiedPersonnel[_personnel];\r\n    }\r\n\r\n    // Function to get the owner of the contract\r\n    function getOwner() external view returns (address) {\r\n        return owner;\r\n    }\r\n}",
                "sourcePath": "C:\\Users\\Aksha\\Desktop\\BlockLock\\codeutsaveme\\contracts\\accessControl.sol",
                "ast": {
                  "absolutePath": "project:/contracts/accessControl.sol",
                  "exportedSymbols": {
                    "AccessControl": [
                      108
                    ]
                  },
                  "id": 109,
                  "license": "MIT",
                  "nodeType": "SourceUnit",
                  "nodes": [
                    {
                      "id": 1,
                      "literals": [
                        "solidity",
                        "^",
                        "0.8",
                        ".13"
                      ],
                      "nodeType": "PragmaDirective",
                      "src": "33:24:0"
                    },
                    {
                      "abstract": false,
                      "baseContracts": [],
                      "canonicalName": "AccessControl",
                      "contractDependencies": [],
                      "contractKind": "contract",
                      "fullyImplemented": true,
                      "id": 108,
                      "linearizedBaseContracts": [
                        108
                      ],
                      "name": "AccessControl",
                      "nameLocation": "70:13:0",
                      "nodeType": "ContractDefinition",
                      "nodes": [
                        {
                          "constant": false,
                          "functionSelector": "8da5cb5b",
                          "id": 3,
                          "mutability": "mutable",
                          "name": "owner",
                          "nameLocation": "106:5:0",
                          "nodeType": "VariableDeclaration",
                          "scope": 108,
                          "src": "91:20:0",
                          "stateVariable": true,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "typeName": {
                            "id": 2,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "91:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "visibility": "public"
                        },
                        {
                          "constant": false,
                          "id": 7,
                          "mutability": "mutable",
                          "name": "verifiedPersonnel",
                          "nameLocation": "176:17:0",
                          "nodeType": "VariableDeclaration",
                          "scope": 108,
                          "src": "143:50:0",
                          "stateVariable": true,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          },
                          "typeName": {
                            "id": 6,
                            "keyType": {
                              "id": 4,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "151:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "Mapping",
                            "src": "143:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            },
                            "valueType": {
                              "id": 5,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "162:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          },
                          "visibility": "private"
                        },
                        {
                          "anonymous": false,
                          "eventSelector": "ec82f249b04a196dd53e2b215e5d02bc8fa125cb4c2c211ca2353862f2ab2ce2",
                          "id": 11,
                          "name": "PersonnelVerified",
                          "nameLocation": "245:17:0",
                          "nodeType": "EventDefinition",
                          "parameters": {
                            "id": 10,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 9,
                                "indexed": true,
                                "mutability": "mutable",
                                "name": "personnel",
                                "nameLocation": "279:9:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 11,
                                "src": "263:25:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 8,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "263:7:0",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "262:27:0"
                          },
                          "src": "239:51:0"
                        },
                        {
                          "anonymous": false,
                          "eventSelector": "66457d438f63200ebd1108ca6abdbbc0bd6e9a573ca5c68a2d44eb7b998fc192",
                          "id": 15,
                          "name": "PersonnelRevoked",
                          "nameLocation": "302:16:0",
                          "nodeType": "EventDefinition",
                          "parameters": {
                            "id": 14,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 13,
                                "indexed": true,
                                "mutability": "mutable",
                                "name": "personnel",
                                "nameLocation": "335:9:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 15,
                                "src": "319:25:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 12,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "319:7:0",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "318:27:0"
                          },
                          "src": "296:50:0"
                        },
                        {
                          "body": {
                            "id": 26,
                            "nodeType": "Block",
                            "src": "424:101:0",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "id": 21,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "id": 18,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967281,
                                          "src": "443:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 19,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "443:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "id": 20,
                                        "name": "owner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3,
                                        "src": "457:5:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "src": "443:19:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "hexValue": "4f6e6c7920746865206f776e65722063616e20706572666f726d207468697320616374696f6e",
                                      "id": 22,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "464:40:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5",
                                        "typeString": "literal_string \"Only the owner can perform this action\""
                                      },
                                      "value": "Only the owner can perform this action"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_2a1cb988fffa75dab1f18f6e33d352b421b15b8203fb8b7f8559967fd8de80e5",
                                        "typeString": "literal_string \"Only the owner can perform this action\""
                                      }
                                    ],
                                    "id": 17,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      4294967278,
                                      4294967278
                                    ],
                                    "referencedDeclaration": 4294967278,
                                    "src": "435:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 23,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "435:70:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 24,
                                "nodeType": "ExpressionStatement",
                                "src": "435:70:0"
                              },
                              {
                                "id": 25,
                                "nodeType": "PlaceholderStatement",
                                "src": "516:1:0"
                              }
                            ]
                          },
                          "id": 27,
                          "name": "onlyOwner",
                          "nameLocation": "412:9:0",
                          "nodeType": "ModifierDefinition",
                          "parameters": {
                            "id": 16,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "421:2:0"
                          },
                          "src": "403:122:0",
                          "virtual": false,
                          "visibility": "internal"
                        },
                        {
                          "body": {
                            "id": 35,
                            "nodeType": "Block",
                            "src": "547:78:0",
                            "statements": [
                              {
                                "expression": {
                                  "id": 33,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "id": 30,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3,
                                    "src": "558:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "expression": {
                                      "id": 31,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "566:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 32,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "566:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "558:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 34,
                                "nodeType": "ExpressionStatement",
                                "src": "558:18:0"
                              }
                            ]
                          },
                          "id": 36,
                          "implemented": true,
                          "kind": "constructor",
                          "modifiers": [],
                          "name": "",
                          "nameLocation": "-1:-1:-1",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 28,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "544:2:0"
                          },
                          "returnParameters": {
                            "id": 29,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "547:0:0"
                          },
                          "scope": 108,
                          "src": "533:92:0",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "public"
                        },
                        {
                          "body": {
                            "id": 61,
                            "nodeType": "Block",
                            "src": "740:183:0",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 47,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "!",
                                      "prefix": true,
                                      "src": "759:30:0",
                                      "subExpression": {
                                        "baseExpression": {
                                          "id": 44,
                                          "name": "verifiedPersonnel",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 7,
                                          "src": "760:17:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                            "typeString": "mapping(address => bool)"
                                          }
                                        },
                                        "id": 46,
                                        "indexExpression": {
                                          "id": 45,
                                          "name": "_personnel",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 38,
                                          "src": "778:10:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "760:29:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "hexValue": "506572736f6e6e656c20697320616c7265616479207665726966696564",
                                      "id": 48,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "791:31:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc",
                                        "typeString": "literal_string \"Personnel is already verified\""
                                      },
                                      "value": "Personnel is already verified"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_8fe0eb9ac631353e6f0a8c8765cb6cc32d9ba3d2ee90068826d03a4963c7d3cc",
                                        "typeString": "literal_string \"Personnel is already verified\""
                                      }
                                    ],
                                    "id": 43,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      4294967278,
                                      4294967278
                                    ],
                                    "referencedDeclaration": 4294967278,
                                    "src": "751:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 49,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "751:72:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 50,
                                "nodeType": "ExpressionStatement",
                                "src": "751:72:0"
                              },
                              {
                                "expression": {
                                  "id": 55,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 51,
                                      "name": "verifiedPersonnel",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7,
                                      "src": "834:17:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                        "typeString": "mapping(address => bool)"
                                      }
                                    },
                                    "id": 53,
                                    "indexExpression": {
                                      "id": 52,
                                      "name": "_personnel",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 38,
                                      "src": "852:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "834:29:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "hexValue": "74727565",
                                    "id": 54,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "866:4:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  "src": "834:36:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 56,
                                "nodeType": "ExpressionStatement",
                                "src": "834:36:0"
                              },
                              {
                                "eventCall": {
                                  "arguments": [
                                    {
                                      "id": 58,
                                      "name": "_personnel",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 38,
                                      "src": "904:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 57,
                                    "name": "PersonnelVerified",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 11,
                                    "src": "886:17:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                      "typeString": "function (address)"
                                    }
                                  },
                                  "id": 59,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "886:29:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 60,
                                "nodeType": "EmitStatement",
                                "src": "881:34:0"
                              }
                            ]
                          },
                          "functionSelector": "615a6628",
                          "id": 62,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [
                            {
                              "id": 41,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                "id": 40,
                                "name": "onlyOwner",
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 27,
                                "src": "730:9:0"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "730:9:0"
                            }
                          ],
                          "name": "verifyPersonnel",
                          "nameLocation": "685:15:0",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 39,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 38,
                                "mutability": "mutable",
                                "name": "_personnel",
                                "nameLocation": "709:10:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 62,
                                "src": "701:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 37,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "701:7:0",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "700:20:0"
                          },
                          "returnParameters": {
                            "id": 42,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "740:0:0"
                          },
                          "scope": 108,
                          "src": "676:247:0",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "external"
                        },
                        {
                          "body": {
                            "id": 86,
                            "nodeType": "Block",
                            "src": "1043:178:0",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "baseExpression": {
                                        "id": 70,
                                        "name": "verifiedPersonnel",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7,
                                        "src": "1062:17:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                          "typeString": "mapping(address => bool)"
                                        }
                                      },
                                      "id": 72,
                                      "indexExpression": {
                                        "id": 71,
                                        "name": "_personnel",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 64,
                                        "src": "1080:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "1062:29:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    {
                                      "hexValue": "506572736f6e6e656c206973206e6f74207665726966696564",
                                      "id": 73,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1093:27:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415",
                                        "typeString": "literal_string \"Personnel is not verified\""
                                      },
                                      "value": "Personnel is not verified"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_6564757b8a82c8334127861e8be5b4f4d1394ccd7462a9683908ba585878d415",
                                        "typeString": "literal_string \"Personnel is not verified\""
                                      }
                                    ],
                                    "id": 69,
                                    "name": "require",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      4294967278,
                                      4294967278
                                    ],
                                    "referencedDeclaration": 4294967278,
                                    "src": "1054:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (bool,string memory) pure"
                                    }
                                  },
                                  "id": 74,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1054:67:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 75,
                                "nodeType": "ExpressionStatement",
                                "src": "1054:67:0"
                              },
                              {
                                "expression": {
                                  "id": 80,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 76,
                                      "name": "verifiedPersonnel",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7,
                                      "src": "1132:17:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                        "typeString": "mapping(address => bool)"
                                      }
                                    },
                                    "id": 78,
                                    "indexExpression": {
                                      "id": 77,
                                      "name": "_personnel",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 64,
                                      "src": "1150:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "1132:29:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "hexValue": "66616c7365",
                                    "id": 79,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1164:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "false"
                                  },
                                  "src": "1132:37:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 81,
                                "nodeType": "ExpressionStatement",
                                "src": "1132:37:0"
                              },
                              {
                                "eventCall": {
                                  "arguments": [
                                    {
                                      "id": 83,
                                      "name": "_personnel",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 64,
                                      "src": "1202:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 82,
                                    "name": "PersonnelRevoked",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 15,
                                    "src": "1185:16:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                      "typeString": "function (address)"
                                    }
                                  },
                                  "id": 84,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1185:28:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 85,
                                "nodeType": "EmitStatement",
                                "src": "1180:33:0"
                              }
                            ]
                          },
                          "functionSelector": "4708e55f",
                          "id": 87,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [
                            {
                              "id": 67,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                "id": 66,
                                "name": "onlyOwner",
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 27,
                                "src": "1033:9:0"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "1033:9:0"
                            }
                          ],
                          "name": "revokePersonnel",
                          "nameLocation": "988:15:0",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 65,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 64,
                                "mutability": "mutable",
                                "name": "_personnel",
                                "nameLocation": "1012:10:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 87,
                                "src": "1004:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 63,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1004:7:0",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "1003:20:0"
                          },
                          "returnParameters": {
                            "id": 68,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1043:0:0"
                          },
                          "scope": 108,
                          "src": "979:242:0",
                          "stateMutability": "nonpayable",
                          "virtual": false,
                          "visibility": "external"
                        },
                        {
                          "body": {
                            "id": 98,
                            "nodeType": "Block",
                            "src": "1351:55:0",
                            "statements": [
                              {
                                "expression": {
                                  "baseExpression": {
                                    "id": 94,
                                    "name": "verifiedPersonnel",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7,
                                    "src": "1369:17:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                      "typeString": "mapping(address => bool)"
                                    }
                                  },
                                  "id": 96,
                                  "indexExpression": {
                                    "id": 95,
                                    "name": "_personnel",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 89,
                                    "src": "1387:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1369:29:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "functionReturnParameters": 93,
                                "id": 97,
                                "nodeType": "Return",
                                "src": "1362:36:0"
                              }
                            ]
                          },
                          "functionSelector": "b9209e33",
                          "id": 99,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [],
                          "name": "isVerified",
                          "nameLocation": "1291:10:0",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 90,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 89,
                                "mutability": "mutable",
                                "name": "_personnel",
                                "nameLocation": "1310:10:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 99,
                                "src": "1302:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 88,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1302:7:0",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "1301:20:0"
                          },
                          "returnParameters": {
                            "id": 93,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 92,
                                "mutability": "mutable",
                                "name": "",
                                "nameLocation": "-1:-1:-1",
                                "nodeType": "VariableDeclaration",
                                "scope": 99,
                                "src": "1345:4:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "typeName": {
                                  "id": 91,
                                  "name": "bool",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1345:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "1344:6:0"
                          },
                          "scope": 108,
                          "src": "1282:124:0",
                          "stateMutability": "view",
                          "virtual": false,
                          "visibility": "external"
                        },
                        {
                          "body": {
                            "id": 106,
                            "nodeType": "Block",
                            "src": "1516:31:0",
                            "statements": [
                              {
                                "expression": {
                                  "id": 104,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3,
                                  "src": "1534:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "functionReturnParameters": 103,
                                "id": 105,
                                "nodeType": "Return",
                                "src": "1527:12:0"
                              }
                            ]
                          },
                          "functionSelector": "893d20e8",
                          "id": 107,
                          "implemented": true,
                          "kind": "function",
                          "modifiers": [],
                          "name": "getOwner",
                          "nameLocation": "1473:8:0",
                          "nodeType": "FunctionDefinition",
                          "parameters": {
                            "id": 100,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1481:2:0"
                          },
                          "returnParameters": {
                            "id": 103,
                            "nodeType": "ParameterList",
                            "parameters": [
                              {
                                "constant": false,
                                "id": 102,
                                "mutability": "mutable",
                                "name": "",
                                "nameLocation": "-1:-1:-1",
                                "nodeType": "VariableDeclaration",
                                "scope": 107,
                                "src": "1507:7:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "typeName": {
                                  "id": 101,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1507:7:0",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "src": "1506:9:0"
                          },
                          "scope": 108,
                          "src": "1464:83:0",
                          "stateMutability": "view",
                          "virtual": false,
                          "visibility": "external"
                        }
                      ],
                      "scope": 109,
                      "src": "61:1489:0",
                      "usedErrors": []
                    }
                  ],
                  "src": "33:1517:0"
                },
                "compiler": {
                  "name": "solc",
                  "version": "0.8.13+commit.abaa5c0e.Emscripten.clang"
                },
                "networks": {
                  "5777": {
                    "events": {},
                    "links": {},
                    "address": "0x7F0D79299B00Af2E01628bebAd022E5Ea63b08db",
                    "transactionHash": "0xb0281881336ec4b20ce8757663b0e90032014788b2510311fcc7c95f00af7483"
                  }
                },
                "schemaVersion": "3.4.16",
                "updatedAt": "2024-10-27T02:29:42.658Z",
                "networkType": "ethereum",
                "devdoc": {
                  "kind": "dev",
                  "methods": {},
                  "version": 1
                },
                "userdoc": {
                  "kind": "user",
                  "methods": {},
                  "version": 1
                }
              }
        ];

        // Contract addresses
        const accessControlAddress = "0x30Cc93F37eF78CEFE383A8682B613a079d8029B4";
        const dataPrivacyAddress = "0x4020F692d599Fa323786D959313888E372CFd022";
        const accessFinalAddress = "0x2e3A67b5A26e085b1473F73b68642743920ae6B0";

        // Create contract instances
        const accessControl = new web3.eth.Contract(AccessControlABI, accessControlAddress);
        const dataPrivacy = new web3.eth.Contract(DataPrivacyABI, dataPrivacyAddress);
        const accessFinal = new web3.eth.Contract(accessFinalABI, accessFinalAddress);

        // Contract interaction functions
        async function verifyPersonnel(personnelAddress) {
            try {
                await accessFinal.methods.verifyPersonnel(personnelAddress).send({ from: account });
                console.log(`Personnel ${personnelAddress} verified.`);
            } catch (error) {
                console.error("Error verifying personnel:", error.message);
            }
        }

        // Event listener for verifying personnel
        document.getElementById("verifyPersonnel").addEventListener("click", async () => {
            const personnelAddress = document.getElementById("personnelAddress").value;
            if (personnelAddress) {
                await verifyPersonnel(personnelAddress);
            }
        });
    } else {
        console.error("Please install MetaMask or configure a local Ethereum provider.");
    }
});
