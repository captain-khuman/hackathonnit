require('dotenv').config();
const {Web3} = require('web3');
const express = require('express');
const app = express();
const web3 = new Web3(process.env.NODE_URL || "http://127.0.0.1:7545");

const cors = require('cors');
app.use(cors());

// Contract ABIs and Addresses
const AccessControlABI = require('./build/contracts/axess.json').abi;
const DataPrivacyABI = require('./build/contracts/privacy.json').abi;
const accessFinalABI = require('./build/contracts/AccessControl.json').abi;

const accessControlAddress = "0x30Cc93F37eF78CEFE383A8682B613a079d8029B4";
const dataPrivacyAddress = "0x4020F692d599Fa323786D959313888E372CFd022";
const accessFinalAddress = "0x2e3A67b5A26e085b1473F73b68642743920ae6B0";

const accessControl = new web3.eth.Contract(AccessControlABI, accessControlAddress);
const dataPrivacy = new web3.eth.Contract(DataPrivacyABI, dataPrivacyAddress);
const accessFinal = new web3.eth.Contract(accessFinalABI, accessFinalAddress);

let account;

// Initialize Ethereum account
async function getAccounts() {
    try {
        const accounts = await web3.eth.getAccounts();
        account = accounts[0];
        console.log(`Connected to account: ${account}`);
    } catch (error) {
        console.error("Error fetching accounts:", error.message);
    }
}

(async () => {
    await getAccounts();
})();

// Contract interaction functions
async function addUser(userAddress) {
    try {
        const result = await accessControl.methods.addUser(userAddress).send({ from: account });
        return `User ${userAddress} added.`;
    } catch (error) {
        throw new Error(`Failed to add user: ${error.message}`);
    }
}

async function logAccessAttempt(userAddress) {
    try {
        const result = await accessControl.methods.logAccessAttempt(userAddress).send({ from: account });
        return `Access attempt logged for ${userAddress}.`;
    } catch (error) {
        throw new Error(`Failed to log access: ${error.message}`);
    }
}

async function setDataPrivacy(enabled) {
    try {
        const result = await dataPrivacy.methods.setDataPrivacy(enabled).send({ from: account });
        return `Privacy setting set to ${enabled}.`;
    } catch (error) {
        throw new Error(`Failed to set privacy: ${error.message}`);
    }
}

async function verifyPersonnel(personnelAddress) {
    try {
        const result = await accessFinal.methods.verifyPersonnel(personnelAddress).send({ from: account });
        return `Personnel ${personnelAddress} verified.`;
    } catch (error) {
        throw new Error(`Failed to verify personnel: ${error.message}`);
    }
}

async function revokePersonnel(personnelAddress) {
    try {
        const result = await accessFinal.methods.revokePersonnel(personnelAddress).send({ from: account });
        return `Personnel ${personnelAddress} revoked.`;
    } catch (error) {
        throw new Error(`Failed to revoke personnel: ${error.message}`);
    }
}

async function isVerified(personnelAddress) {
    try {
        const result = await accessFinal.methods.isVerified(personnelAddress).call();
        return `Verification status: ${result}`;
    } catch (error) {
        throw new Error(`Failed to check verification: ${error.message}`);
    }
}

async function getOwner() {
    try {
        const result = await accessFinal.methods.owner().call();
        return `Contract owner: ${result}`;
    } catch (error) {
        throw new Error(`Failed to get owner: ${error.message}`);
    }
}

// HTML content variable
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blockchain Access Control</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg2MzZ8MHwxfGFsbHwxfHx8fHx8fHwxNjA3ODk1MTI4&ixlib=rb-1.2.1&q=80&w=1920') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            background: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            margin: auto;
            backdrop-filter: blur(10px);
        }
        h2 {
            color: #007BFF;
            text-align: center;
            margin-bottom: 20px;
        }
        .input-group {
            margin-bottom: 20px;
        }
        input, button {
            width: 100%;
            padding: 12px;
            margin: 5px 0;
            border: 1px solid #ced4da;
            border-radius: 5px;
            transition: border-color 0.3s;
        }
        input:focus, button:focus {
            border-color: #007BFF;
            outline: none;
        }
        button {
            background: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
        }
        button:hover {
            background: #0056b3;
        }
        #response {
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }
        .success {
            background: #d4edda;
            color: #155724;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
        }
        label {
            margin: 10px 0 5px;
            display: block;
            font-weight: 600;
        }
        .checkbox-container {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }
        .checkbox-container input {
            width: auto;
            margin-right: 10px;
        }
        .icon {
            margin-right: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Blockchain Access Control</h2>
        
        <div class="input-group">
            <label for="personnelAddress"><i class="fas fa-user-shield icon"></i>Personnel Address</label>
            <input type="text" id="personnelAddress" placeholder="Enter Personnel Address">
            <button onclick="verify()"><i class="fas fa-check-circle icon"></i>Verify Personnel</button>
            <button onclick="revoke()"><i class="fas fa-user-slash icon"></i>Revoke Personnel</button>
            <button onclick="checkVerification()"><i class="fas fa-search icon"></i>Check Verification</button>
        </div>

        <div class="input-group">
            <label for="userAddress"><i class="fas fa-user-plus icon"></i>User Address</label>
            <input type="text" id="userAddress" placeholder="Enter User Address">
            <button onclick="addUser()"><i class="fas fa-user-plus icon"></i>Add User</button>
            <button onclick="logAccess()"><i class="fas fa-clipboard-list icon"></i>Log Access</button>
        </div>

        <div class="checkbox-container">
            <input type="checkbox" id="privacySetting">
            <label for="privacySetting"><i class="fas fa-lock icon"></i>Enable Privacy</label>
        </div>
        <button onclick="setPrivacy()"><i class="fas fa-shield-alt icon"></i>Set Privacy</button>
        <button onclick="getOwner()"><i class="fas fa-info-circle icon"></i>Get Owner</button>

        <div id="response"></div>
    </div>

    <script>
        async function sendRequest(endpoint, data) {
            const responseDiv = document.getElementById('response');
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (!response.ok) throw new Error(result.message);
                
                responseDiv.className = 'success';
                responseDiv.textContent = result.message;
            } catch (error) {
                responseDiv.className = 'error';
                responseDiv.textContent = error.message;
            }
        }

        async function verify() {
            const address = document.getElementById('personnelAddress').value;
            await sendRequest('/verifyPersonnel', { personnelAddress: address });
        }

        async function revoke() {
            const address = document.getElementById('personnelAddress').value;
            await sendRequest('/revokePersonnel', { personnelAddress: address });
        }

        async function checkVerification() {
            const address = document.getElementById('personnelAddress').value;
            await sendRequest('/isVerified', { personnelAddress: address });
        }

        async function addUser() {
            const address = document.getElementById('userAddress').value;
            await sendRequest('/addUser', { userAddress: address });
        }

        async function logAccess() {
            const address = document.getElementById('userAddress').value;
            await sendRequest('/logAccessAttempt', { userAddress: address });
        }

        async function setPrivacy() {
            const enabled = document.getElementById('privacySetting').checked;
            await sendRequest('/setDataPrivacy', { enabled });
        }

        async function getOwner() {
            await sendRequest('/getOwner', {});
        }
    </script>
</body>
</html>
`;


// Routes
app.get('/', (req, res) => {
    res.send(htmlContent);
});

// API endpoints
app.post('/verifyPersonnel', express.json(), async (req, res) => {
    try {
        const message = await verifyPersonnel(req.body.personnelAddress);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/revokePersonnel', express.json(), async (req, res) => {
    try {
        const message = await revokePersonnel(req.body.personnelAddress);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/isVerified', express.json(), async (req, res) => {
    try {
        const message = await isVerified(req.body.personnelAddress);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/addUser', express.json(), async (req, res) => {
    try {
        const message = await addUser(req.body.userAddress);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/logAccessAttempt', express.json(), async (req, res) => {
    try {
        const message = await logAccessAttempt(req.body.userAddress);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/setDataPrivacy', express.json(), async (req, res) => {
    try {
        const message = await setDataPrivacy(req.body.enabled);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/getOwner', express.json(), async (req, res) => {
    try {
        const message = await getOwner();
        res.json({ message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});