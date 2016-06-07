var countriesApp = angular.module('countriesApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })

        .when('/countries', {
            templateUrl: 'countries.html',
            controller: 'countriesCtrl',
        })

        .when('/countries/:countryCode', {
            templateUrl: 'country.html',
            controller: 'indivCountryCtrl',
        })

        .otherwise({ redirectTo: '/' })

    }])
