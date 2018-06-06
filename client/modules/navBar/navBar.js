Template.navBar.helpers({
    'connected': function () {
        return Session.get('connected');
    },
    'attempted': function () {
        return Session.get('attempted');
    },
    'rpc': function () {
        return Session.get('rpc');
    }
});

Template.navBar.events({
    'click .connect': function (event, template) {
        event.preventDefault();
        var Web3 = require('web3');
        web3 = new Web3(new Web3.providers.HttpProvider(Session.get('rpc'))); // change this to your local rpc
        Session.set('attempted', false);
        web3.eth.getCoinbase().then(function (resp) {
            console.log('coinbase', resp);
            Session.set('coinbase',resp);
            if (web3.eth._provider.connected) {
                Session.set('connected', true);
            } else {
                Session.set('connected', false);
            }
            Session.set('attempted', true);
        }).catch(function(){
            Session.set('attempted', true);
            Session.set('connected', false);
        });
    },
    'click .edit': function (event, template) {
        event.preventDefault();

        var rpcAddr = prompt('Enter RPC Address (http://localhost:8545)', 'http://localhost:8545');
        Session.set('rpc', rpcAddr);
        var Web3 = require('web3');
        web3 = new Web3(new Web3.providers.HttpProvider(Session.get('rpc'))); // change this to your local rpc
        Session.set('attempted', false);

        web3.eth.getCoinbase().then(function (resp) {
            console.log('coinbase', resp);
            Session.set('coinbase',resp);
            if (web3.eth._provider.connected) {
                Session.set('connected', true);
            } else {
                Session.set('connected', false);
            }
            Session.set('attempted', true);
        }).catch(function(){
            Session.set('attempted', true);
            Session.set('connected', false);
        });
    }
});

Template.navBar.onCreated(function () {

});

Template.navBar.onRendered(function () {

});

Template.navBar.onDestroyed(function () {
    //add your statement here
});

