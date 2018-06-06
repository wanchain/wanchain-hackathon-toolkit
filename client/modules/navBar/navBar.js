Template.navBar.helpers({
    'connected':function(){
        return Session.get('connected');
    },
    'attempted':function(){
        return Session.get('attempted');
    }
});

Template.navBar.events({
    'click .connect':function(){
        var Web3 = require('web3');
        web3 = new Web3(new Web3.providers.HttpProvider("http://159.89.159.139:8549")); // change this to your local rpc


        web3.eth.getCoinbase(function(err,resp){
            if(resp){
                console.log('connected to wanchain node')
                console.log('coinbase',resp);
            }
        });
        Session.set('attempted',false);
        setTimeout(function(){
            Session.set('attempted',true);
            if(web3.currentProvider.connected){
                Session.set('connected',true);
            }else{
                Session.set('connected',false);
            }
        },3000)
    }
});

Template.navBar.onCreated(function () {
    //add your statement here
});

Template.navBar.onRendered(function () {
    setTimeout(function(){
        Session.set('attempted',true);
        if(web3.currentProvider.connected){
            Session.set('connected',true);
        }else{
            Session.set('connected',false);
        }
    },3000)
});

Template.navBar.onDestroyed(function () {
    //add your statement here
});

