var m = new Mediator(),

    Controller = (function () {
        function Controller() {
            var townListView = new TownListView(),
                createEdit = new CreateEdit();

            m.subscribe('location: update init', createEdit.updateInit)
                .subscribe('location: add init', createEdit.addInit)
                .subscribe('location: added', townListView.add);

            $('#main').append(townListView.render().el);

            return this;
        }

        return Controller;


    })();

