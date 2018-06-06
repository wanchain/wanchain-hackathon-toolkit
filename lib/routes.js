FlowRouter.route('/', {
    action: function(params, queryParams) {
        Session.set('params',queryParams)
        BlazeLayout.render('devDocs',{
            content:'gettingStarted'
        });
    }
});



FlowRouter.route('/x/:template', {
    action: function(params, queryParams) {
        Session.set('params',queryParams)
        BlazeLayout.render('hackerPortal',{
            content:params.template
        });
    }
});


