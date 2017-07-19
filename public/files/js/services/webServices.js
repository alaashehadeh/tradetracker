tradeTracker.service('webApi', function ($http) {
    this.searchResult = function (data) {
        return $http.post('/api/v1/formData',data);
    }
});