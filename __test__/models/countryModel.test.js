const countryModel = require('../../src/models/countryModel');

describe('Country Model', ()=>{
    test('class should be defined',() => {
        const countryModelTest = new countryModel();
        expect(countryModelTest).toBeDefined();
    });
});