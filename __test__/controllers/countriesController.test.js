const controllers = require('../../src/controllers/index');

describe('Testing Country Controller', () => {
    test('allCountries method should be defined ', ()=>{
        const  dataAllCountries = controllers.countryController.allCountries();
        expect(dataAllCountries).toBeDefined();
    });
});