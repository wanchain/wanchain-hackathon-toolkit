# RPC URLS

These RPC Urls can be used as a quick-start to connecting your Dapp to the wanchain blockchain.

````javascript
http://52.14.147.127/testnet
````

````javascript
http://52.14.147.127/mainnet
````


### Example

~~~javascript
var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider('http://52.14.147.127/testnet'));

web3.eth.getCoinbase().then(function(resp){
    // SUCCESS
    alert('coinbase: ' + resp);
}).catch(function(err){
    // ERROR
    alert('error',err);
});
~~~