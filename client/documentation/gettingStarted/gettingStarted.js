Template.gettingStarted.helpers({
    'md':function(){
        return Session.get('md');
    },
    'readme':function(){
        return Session.get('readme');
    }
});

Template.gettingStarted.events({
    //add your events here
});

Template.gettingStarted.onCreated(function () {
    //add your statement here
});

Template.gettingStarted.onRendered(function () {

    Tracker.autorun(function(){

        var theDoc = Session.get('params').d || 'gettingstarted';
        if(Session.get('params')){
            console.log('getting readme')
            $.get('/documentation/'+theDoc+'.md',function(resp){
                Session.set('md',resp);
                Session.set('readme','/documentation/'+theDoc+'.md')
            });
        }
    })

});

Template.gettingStarted.onDestroyed(function () {
    //add your statement here
});

