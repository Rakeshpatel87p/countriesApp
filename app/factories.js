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

.factory('getCapitalPop', ['$http', function($http){
    return function(countryID, capital){
        var params = {
            username: 'rakeshpatel87p',
            country: countryID,
            q: capital,
            name_equals: capital,
            isNameRequired: true,
            featureCode: 'PPLC'
        };

        return $http({
            url: 'http://api.geonames.org/searchJSON?',
            method: 'GET',
            params: params
        })
    }

}])