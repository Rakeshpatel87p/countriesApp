describe('getCountryData', function(){
	beforeEach(module('countriesApp'));
	var httpBackend = $httpBackend;

	it('should look up country details for listed nations', 
		inject(function(getCountryData, $rootScope, $httpBackend){
			$httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?&username=rakeshpatel87p').respond(200);
			var status = false;
			getCountryData('success').then(function(){
				status = true;
			});

			$rootScope.$digest();
			$httpBackend.flush();
			expect(status).toBe(true);
			httpBackend.verifyNoOutStandingRequest();
		}));


})

// describe('countriesCtrl', function(){
// 	beforeEach(module('countriesApp'));

// 	var $controller; 

// 	it('should store data into the rootScope value')
// 	})