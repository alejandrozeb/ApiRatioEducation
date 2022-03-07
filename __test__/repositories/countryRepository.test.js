const repositories = require('../../src/repositories/index');

describe('Country repository', ()=>{
    test('should be defined',() => {
        const countryRepository = repositories.Countryrepository;
        expect(countryRepository).toBeDefined();
    });
    
});