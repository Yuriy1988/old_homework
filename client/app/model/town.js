var Town = Backbone.Model.extend({
    defaults: {
        name: 'n/a',
        groups: 0,
        teachers: 0
    },
    urlRoot:'/data.json'
});


