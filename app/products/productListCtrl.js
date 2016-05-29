(function () {
    'use strict';

    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);

    ProductListCtrl.$inject = ["productResource"];

    function ProductListCtrl(productResource) {
        var vm = this;
        
        productResource.query(function(data){
            vm.products = data;
        });
               
        vm.showImage = false;
        
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        };
    }

})();