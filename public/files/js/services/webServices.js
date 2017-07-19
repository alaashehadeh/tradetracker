tradeTracker.service('webApi', function ($http) {
    this.searchResult = function (data) {
        return $http.post('https://tranquil-ravine-89010.herokuapp.com/public/api/v1/formData',data);
    }
});