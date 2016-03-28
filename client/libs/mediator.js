var Mediator = (function () {
    function Mediator() {
        var channels = {},
            args;

        this.subscribe = function (channel, fn) {
            if (!channels[channel]) {
                channels[channel] = [];
            }
            channels[channel].push(fn);
            return this;
        };

        this.publish = function (channel) {
            args = [].slice.call(arguments, 1);
            channels[channel].forEach(function (channel) {
                channel.apply(null, args);
            });
        };

        return this;
    }

    return Mediator;
})();