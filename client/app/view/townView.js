var TownView = Backbone.View.extend({
    tagName: 'div',
    className: 'list-group-item',
    template: _.template(tpl.town),

    events: {
        'contextmenu': 'initMenu',
        'click .delete': 'delete',
        'click .update': 'updateInit'
    },

    initialize: function() {
        this.model.on ('change', function() {
            this.render();
        }, this);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    initMenu: function () {
        event.preventDefault();
        $('.menu').remove();
        this.$el.append(tpl.menu);
        $(document).click(function() {
            $('.menu').remove();
        });
    },

    delete: function () {
        this.$el.remove();
        this.model.destroy();
        this.stopListening();
    },

    updateInit: function () {
        m.publish('location: update init', this.model)
    }
});