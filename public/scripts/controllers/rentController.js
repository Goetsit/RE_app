
myApp.controller('rentController', ['$http', function($http){
    console.log('rentController sourced');

    var vm = this;
    var rentals=[];
    var newRental = {};

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


    vm.newRental = function(newR){
        console.log('things', newR);
        $http.post('/rent', newR).then(function(reposnse){
            console.log('POST on /rent succesful');
            vm.getRentals();
        }).catch(function(error){
            console.log('failure on post /rent')
        })
        
    }

}]);
