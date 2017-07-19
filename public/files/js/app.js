var tradeTracker = angular.module('tradeTracker',[]);
tradeTracker.filter('urlEncode', function(){
    return function(url) {
        url = window.decodeURIComponent(url);
        return url;
    }
});