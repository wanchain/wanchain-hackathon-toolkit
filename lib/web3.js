var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://159.89.159.139:8549")); // change this to your local rpc


web3.eth.getCoinbase(function(err,resp){
  if(resp){
      console.log('connected to wanchain node')
    console.log('coinbase',resp);
  }
});