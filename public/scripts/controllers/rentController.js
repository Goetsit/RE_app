
myApp.controller('rentController', ['$http', function($http){
    console.log('rentController sourced');

    var vm = this;
    var rentals=[];

    vm.getRentals = function(){
        $http.get('/rent').then(function (response) {
            console.log('Success!');
            vm.rentals = response.data;
            console.log(vm.rentals);
        }).catch(function (error) {
            console.log('Failure!', error);
        });
    }
    vm.getRentals();
}]);
