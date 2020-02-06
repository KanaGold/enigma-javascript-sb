import getWeb3 from './getWeb3';
import { Enigma } from 'enigma-js';

export default async () => {
    try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        // About EnimgaContract Object
        // If Discovery is Running in Software simulation mode, use "EnigmaSimulation.json"
        // If Discovery is Running in Hardware mode, use "Enigma.json"
        //const EnigmaContract = require('../build/enigma_contracts/EnigmaSimulation.json');
        const EnigmaContract = require('../build/enigma_contracts/Enigma.json');
        const EnigmaTokenContract = require('../build/enigma_contracts/EnigmaToken.json');
        const enigma = new Enigma(
            web3,
            EnigmaContract.networks['4447'].address,
            EnigmaTokenContract.networks['4447'].address,
            //'http://localhost:3333',
            'http://51.145.139.98:3333',
            {
                gas: 4712388,
                gasPrice: 100000000000,
                from: (await web3.eth.getAccounts())[0],
            },
        );
        enigma.admin();
        enigma.setTaskKeyPair('cupcake');
        return enigma;
    } catch (error) {
        // Catch any errors for any of the above operations.
        console.log(error);
    }
};

