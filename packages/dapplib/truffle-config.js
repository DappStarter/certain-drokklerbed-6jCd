require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth mushroom evil hidden fork bone tornado'; 
let testAccounts = [
"0xdf87451de0b02a004def0bf12cf46ba57ddad9560617921bc31ce2f14d1cc80b",
"0xbfd0811a45c47afc9f5e2c3c64248588e544e352e4ea5c572da4cb4b9a65b8cb",
"0x0124c187a06f70761f9a05a1aee075063d0eb22f3967a98515259915aefebaf1",
"0x9e185e719c2c38d56e0c15918723cef50db266a44092fe3d5640e4bc29462284",
"0xfa147be0f44948ef95e602ac844beb16aaa2268e8dd22f5539195787d23b0347",
"0x7a5037da188a930fc8691fc9c43cbd66ec6357b07cf5ce3b3d653a92c5cd9fa8",
"0xe5f5dad16e4c414cf6fc0d41ac5863ca34325607473eb4744580b386064bd9e1",
"0x43e9468288ab8c357bf5a1fcb8c40cdd8fdfa8ace3eea397526cd46b92c05a04",
"0xa4a883f2fdf1b29844290fbc27d192708d6fa4a69acafccbb933a4bed7e0a42a",
"0x9af72f79deb940533448c423a6dc763b4686312b2d40ea4180cb4569a04dc9c9"
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


