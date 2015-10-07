var app = angular.module('countApp', []);

app.controller('countController', function() {
    var count = this;

    count.number = 0;
    count.addOne = function () {
        count.number++;
    };
});
