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


FlowRouter.route('/docs', {
    action: function(params, queryParams) {
        Session.set('params',queryParams)
        BlazeLayout.render('devDocs',{
            content:'gettingStarted'
        });
    }
});

FlowRouter.route('/dox/:template', {
    action: function(params, queryParams) {
        Session.set('params',queryParams)
        BlazeLayout.render('devDocs',{
            // content:params.template
        });
    }
});