var TownListView = Backbone.View.extend({
    tagName: 'div',
    className: 'panel panel-primary',

    events: {
        'click .addBtn': 'initAdd'
    },

    initialize: function () {
        var townsList = new TownsList;
        this.collection = townsList;
        townsList.fetch();
        console.log(townsList)
        this.listenTo(this.collection, 'add', this.renderOne, this);
        _.bindAll(this, 'add');
    },

    render: function () {
        this.$el.append(tpl.AddBtn);
        this.collection.forEach(this.renderOne, this);
        return this;
    },

    renderOne: function (town) {
        var townView = new TownView({model: town});
        this.$el.append(townView.render().el);
    },

    add: function (town) {
        this.collection.create(town);
    },

    initAdd: function() {
        m.publish('location: add init');
    }
});

