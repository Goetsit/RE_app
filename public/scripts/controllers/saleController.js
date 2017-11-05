
myApp.controller('saleController', ['$http', function($http){
    console.log('saleController sourced');

    var vm = this;
    var sales=[];

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

}]);



