# Dapp Setup


 

#### Overview
Now that you have a wanchain node running, its time to utilize <a href="https://www.npmjs.com/package/web3">web3</a> to interact your node
from your dapp enviroment.
 
### Prerequisites

###### You must have a wanchain node running
Once you have your node running, you must keep that terminal window open or else the node will stop.

There are methods to keep it running in the background, but for this example lets just keep that terminal window open.

```
$ gwan --testnet --rpc --rpcport 8545 --rpccorsdomain 127.0.0.1  --verbosity=0 console

```

<a href="https://cl.ly/rzvy/Screen%20Shot%202018-06-01%20at%2011.18.55%20AM.png" target="_blank"><img style="width:100%" src="https://cl.ly/rzvy/Screen%20Shot%202018-06-01%20at%2011.18.55%20AM.png"></a>

If you don't see a 'coinbase' account it means that you need to setup your first account on your blockchain node.

Inside of your wanchain node terminal window type the following:

```
> personal.newAccount() # you will be prompted to enter a passphrase (dont forget it)

```

##### then restart your node
```
> exit
$ gwan --testnet --rpc --rpcport 8545 --rpccorsdomain "127.0.0.1" --rpcaddr "127.0.0.1"   --verbosity=0 console

```

Now you should see a coinbase address.
 
--------

### 1. Install Web3

```
cd ~/path/to/dapp/directory
```
```
$ npm install web3 # node
$ meteor npm install web3 --save # meteor
$ yarn add web3 # yarn
```
------


#### Using Web3

Now that you have web3 added to your dapp, its time to use it to connect to your running wanchain node.

You can run this <b>server</b> or <b>client</b> side by adding to an existing js file or creating a new one.

###### RPC
In order to connect to your blockchain via RPC you must make sure your node is running and that you used  `--rpc` flag when starting up your node. We are assuming you are running your dapp locally so lets open up access so you also want to make sure  have the following included in your node startup command `--rpccorsdomain "*" `. Once you know what port your dapp is running on you can restart your node and change it to `--rpccorsdomain "http://localhost:<port>" `
```
var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545));

```

###### TESTING
In order to connect to your blockchain via RPC you must make sure your node is running and that you used  `--rpc` flag
when starting up your node. We are assuming you are using `localhost` to run your dapp so you also want to make sure 
have the following included in your node startup command `--rpccorsdomain 127.0.0.1 `
```
var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.getCoinbase(function(err,resp){
    console.log('coinbase',resp)
});

```
If you ran this on the client, you should see the coinbase logged in your javascript console.

If you ran this on the server, you should see the coinbase logged in your server logs.


# Dapp Setup


 

#### Overview
Now that you have a wanchain node running, its time to utilize <a href="https://www.npmjs.com/package/web3">web3</a> to interact your node
from your dapp enviroment.
 
### Prerequisites

###### You must have a wanchain node running
Once you have your node running, you must keep that terminal window open or else the node will stop.

There are methods to keep it running in the background, but for this example lets just keep that terminal window open.

```
$ gwan --testnet --rpc --rpcport 8545 --rpccorsdomain 127.0.0.1  --verbosity=0 console

```

<a href="https://cl.ly/rzvy/Screen%20Shot%202018-06-01%20at%2011.18.55%20AM.png" target="_blank"><img style="width:100%" src="https://cl.ly/rzvy/Screen%20Shot%202018-06-01%20at%2011.18.55%20AM.png"></a>

If you don't see a 'coinbase' account it means that you need to setup your first account on your blockchain node.

Inside of your wanchain node terminal window type the following:

```
> personal.newAccount() # you will be prompted to enter a passphrase (dont forget it)

```

##### then restart your node
```
> exit
$ gwan --testnet --rpc --rpcport 8545 --rpccorsdomain "127.0.0.1" --rpcaddr "127.0.0.1"   --verbosity=0 console

```

Now you should see a coinbase address.
 
--------

### 1. Install Web3

```
cd ~/path/to/dapp/directory
```
```
$ npm install web3 # node
$ meteor npm install web3 --save # meteor
$ yarn add web3 # yarn
```
------


#### Using Web3

Now that you have web3 added to your dapp, its time to use it to connect to your running wanchain node.

You can run this <b>server</b> or <b>client</b> side by adding to an existing js file or creating a new one.

###### RPC
In order to connect to your blockchain via RPC you must make sure your node is running and that you used  `--rpc` flag when starting up your node. We are assuming you are running your dapp locally so lets open up access so you also want to make sure  have the following included in your node startup command `--rpccorsdomain "*" `. Once you know what port your dapp is running on you can restart your node and change it to `--rpccorsdomain "http://localhost:<port>" `
```
var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545));

```

###### TESTING
In order to connect to your blockchain via RPC you must make sure your node is running and that you used  `--rpc` flag
when starting up your node. We are assuming you are using `localhost` to run your dapp so you also want to make sure 
have the following included in your node startup command `--rpccorsdomain 127.0.0.1 `
~~~javascript
var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.getCoinbase(function(err,resp){
    console.log('coinbase',resp)
});
~~~

If you ran this on the client, you should see the coinbase logged in your javascript console.

If you ran this on the server, you should see the coinbase logged in your server logs.


