
myApp.controller('saleController', ['$http', function($http){
    console.log('saleController sourced');

    var vm = this;
    var sales=[];
    var newSale = {};

    vm.getSales = function(){
        $http.get('/sale').then(function (response) {
            console.log('Success!');
            vm.sales = response.data;
            console.log(vm.sales);
        }).catch(function (error) {
            console.log('Failure!', error);
        });
    }
    vm.getSales();

    vm.newSale = function(newS){
        console.log('sale button clicked', newS);
        $http.post('/sale', newS).then(function(reposnse){
            console.log('POST on /sale succesful');
            vm.getSales();
        }).catch(function(error){
            console.log('failure on post /sale')
        })
    }

}]);



