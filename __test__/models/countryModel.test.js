const model = require('../../src/models/index');

describe('Country Model', ()=>{
    test('class should be defined',() => {
        const countryModel = model.Country;
        expect(countryModel).toBeDefined();
    });
});