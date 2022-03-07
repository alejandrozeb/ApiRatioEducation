const repositories = require('../../src/repositories/index');

describe('Country repository', ()=>{
    test('Class should be defined',() => {
        const countryRepository = repositories.countryRepository;
        expect(countryRepository).toBeDefined();
    });

    test('get all method should be defined', () => {
        const countryRepository = repositories.countryRepository.getAll;
        expect(countryRepository).toBeDefined();
    });
});