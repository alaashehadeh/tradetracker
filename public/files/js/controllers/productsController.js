tradeTracker.controller('searchController', ['$scope', 'webApi', function ($scope, webApi) {
    $scope.loading = false;
    $scope.error = false;
    $scope.formData = function () {
        $scope.result = false;
        $scope.error = false;
        $scope.loading = true;
        data = {
            url: $scope.url
        };
        webApi.searchResult(data).then(function successCallback(response) {
            $scope.loading = false;
            $scope.result = response.data.products.product;
        }, function errorCallback(response) {
            $scope.loading = false;
            $scope.error = true;
        });
    }
}]);