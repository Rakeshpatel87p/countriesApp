countriesApp.controller('countriesCtrl', ['getCountryData', '$rootScope', function(getCountryData, $rootScope) {
    getCountryData().then(function(response) {
        $rootScope.countryData = response.data.geonames;

    });
}])

.controller('indivCountryCtrl', ['$scope', '$rootScope', '$routeParams', 'getNeighborInfo', 'getCapitalPop', function($scope, $rootScope, $routeParams, getNeighborInfo, getCapitalPop){
	$scope.countryCode = $routeParams.countryCode;
	getNeighborInfo($scope.countryCode).then(function(response){
		$scope.neighbors = response.data.geonames;

	})

	// it is filtering the objects based on a country code that matches the needed countryCode, provided by routeParams.
	var countryInfo = $rootScope.countryData.filter(function(obj){
		return obj.countryCode == $routeParams.countryCode;

	});
	
	$scope.countryInfo = countryInfo;

	getCapitalPop($scope.countryCode, $scope.countryInfo[0].capital).then(function(result){
		$scope.capitalPop = result.data.geonames[0].population;
	})
}])
