Template.docsMenu.helpers({
'class':function(elem){
    var theVar = Session.get('params').d || 'gettingstarted'
    if(Session.get('params') && elem === theVar){
        return 'active'
    }
}
});

Template.docsMenu.events({

});

Template.docsMenu.onCreated(function () {
    //add your statement here
});

Template.docsMenu.onRendered(function () {
    if(Session.get('params') && Session.get('params').d){
        $('.'+Session.get('params').d || 'gettingstarted').addClass('active');
    }else{
        $('.gettingstarted').addClass('active');
    }

});

Template.docsMenu.onDestroyed(function () {
    //add your statement here
});

