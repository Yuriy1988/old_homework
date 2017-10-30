var TownsList = Backbone.Collection.extend({
    model: Town,
    url: 'data.json',
    'idAttribute': '_id'
});


