require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain hole include arctic bridge gas'; 
let testAccounts = [
"0x256064c062eff5dea1696b67572919fe0755b81e915fe389ff00d39905d8caab",
"0x256c232a2ae18287debba0a5e85494d645232cc4d975113165f1505414dfa1e8",
"0xf96c0e7705fe742af8d366b888dd98d6495800ae1a92b1f7a8905825d780b3b9",
"0x1d1dcdbc53f3393812905df32d238f1482703b9f5d5e0610b941edbe7ba3c5b5",
"0x267137ff44b936670727a4fb65d2795138402061f951e2ca91f7890b9a5ca694",
"0x6583d2327e3d840486dd5cb92757ab4b7ffeceae8ca966957d628b4faaff00d6",
"0x108734df46959b3d367b3c3e560448c81d0d486e7e85132324e0fcfca3d24631",
"0xf787251ce73f743416fef397dace6d17fc7d66d488fb96445c03d71064586fe4",
"0x17804415eb4f6aa9fbd613f8819d8310ba6e6e68e9164545212ca8674bef2fa6",
"0x95506977e4a36dff0bc853b3ed584c254ce65f341678344e958f2c2c28b69000"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


