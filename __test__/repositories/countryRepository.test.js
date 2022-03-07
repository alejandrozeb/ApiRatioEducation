const repositories = require('../../src/repositories/index');

describe('Country repository', ()=>{
    test('should be defined',() => {
        const countryRepository = repositories.countryRepository;
        expect(countryRepository).toBeDefined();
    });
    
});