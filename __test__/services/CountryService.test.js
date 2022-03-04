const services = require('../../src/services/index');

describe('Testing services', ()=>{
    test('CountryService should be defined',() => {
        const countryService = services.CountryService;
        expect(countryService).toBeDefined();
    });
    test('getAllcountries method should be defined', () =>{
        const countryServiceMethod = services.CountryService.getAllCountries;
        expect(countryServiceMethod).toBeDefined();
    });
});