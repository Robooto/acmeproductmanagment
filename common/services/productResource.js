(function() {
    'use strict';

    angular
        .module("common.services")
        .factory("productResource", productResource);
        
     productResource.$inject = ["$resource"];
     
     function productResource($resource){
         return $resource("/api/products/:productId");
     }
})();