Template.examples.helpers({
    'coinbase':function(){
        return Session.get('coinbase');
    },
    'connected':function(){
        return Session.get('connected');
    },
});

Template.examples.events({
   'click .coinbase .execute':function(){
       web3.eth.getCoinbase().then(function(resp){
           alert('coinbase: ' + resp)
       }).catch(function(err){
           alert('error',err)
       });
   },
    'click .blocknumber .execute':function(){
        web3.eth.getBlockNumber().then(function(resp){
            alert('latest block: ' + resp)
        }).catch(function(err){
            alert('error',err)
        });
    },
    'submit .getBalance':function(event,template){
        event.preventDefault();
        var address = $(event.target).find('input').val() || false;
        if(address){
            web3.eth.getBalance(address.toUpperCase(),function(err,resp){
                console.log(resp)
                alert('balance for '+address + ' = '+resp)
            })
        }else{
            alert('you must input an address')
        }

    }
});

Template.examples.onCreated(function () {
    //add your statement here
});

Template.examples.onRendered(function () {

});

Template.examples.onDestroyed(function () {
    //add your statement here
});

