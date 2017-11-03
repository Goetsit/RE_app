console.log('js sourced');


var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider.when('/rent', {
        templateUrl: 'templates/rent.html',
        controller: 'rentController as rent'

    }).when('/sale', {
        templateUrl: 'templates/sale.html', 
        controller: 'saleController as sale'
    })
});
