countriesApp.controller('countriesCtrl', ['getCountryData', '$rootScope', function(getCountryData, $rootScope) {
    getCountryData().then(function(response) {
        $rootScope.countryData = response.data.geonames;
        console.log(response);

    });
}])

.controller('indivCountryCtrl', ['$scope', '$rootScope', '$routeParams', 'getNeighborInfo', function($scope, $rootScope, $routeParams, getNeighborInfo){
	$scope.countryCode = $routeParams.countryCode;
	getNeighborInfo($scope.countryCode).then(function(response){
		$scope.neighbors = response.data.geonames;
	})

	console.log($rootScope.countryData)
}])

// function massageData(data){
//     

//     })
// }
