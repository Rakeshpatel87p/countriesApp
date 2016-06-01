describe('getCountryData', function(){
	beforeEach(module('countriesApp'));

	it('should retrieve country data for countries page',
		inject(function(getCountryData, $rootScope, $httpBackend){
			$httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?').respond(200);
			var status = false;
			getCountryData('information').then(function(){
				status = true;
			});

			$rootScope.$digest();
			$httpBackend.flush();
			expect(status).toBe(true);
			$httpBackend.verifyNoOutstandingRequest();
		}))
})