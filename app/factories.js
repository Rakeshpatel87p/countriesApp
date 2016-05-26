countriesApp.factory('getCountryData', ['$http', function($http) {
    return function(){
    var params = {
        username: 'rakeshpatel87p',
        
    };

    return $http({
        url: 'http://api.geonames.org/countryInfoJSON?',
        method:'GET', 
        params: params,
        cache: true
        
        });

};

}])

.factory('getNeighborInfo', ['$http', function($http){
    return function(country){
        var params = {
            username: 'rakeshpatel87p',
            country: country
        };

        return $http({
            url: 'http://api.geonames.org/neighboursJSON?',
            method: 'GET',
            params: params
        })
    }
}])