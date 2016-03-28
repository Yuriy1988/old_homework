var CreateEdit = Backbone.View.extend({
    el: '#main',
    json: {},

    events: {
        'click .saveBtn': 'saveModel'
    },

    initialize: function () {
        this.$el.append(tpl.form);
        _.bindAll(this, 'saveModel', 'formToJSON', 'updateInit', 'setFormValues', 'addInit');

    },

    addInit: function () {
        this.clearForm();
        this.channel = 'location: added';
    },

    updateInit: function (model) {
        this.currentModel = model;
        this.setFormValues();
        this.channel = '';
    },

    formToJSON: function () {
        var json = {};
        $('.modal-body input').each(function (i, e) {
            json[$(e).attr('name')] = $(e).val();
        });
        this.json = json;
    },

    saveModel: function () {
        if (this.channel === 'location: added') {
            this.formToJSON();
            m.publish(this.channel, this.json, this.currentModel);
            this.channel = '';
        } else {
            this.formToJSON();
            this.currentModel.set(this.json);
            this.currentModel.save();
        }
    },

    setFormValues: function () {
        var json = this.currentModel.toJSON();
        $('.modal-body input').each(function (i, e) {
            $(e).val(json[$(e).attr('name')]);
        });
    },

    clearForm: function () {
        $('.modal-body input').each(function (i, e) {
            $(e).val('');
        });
    }
});


