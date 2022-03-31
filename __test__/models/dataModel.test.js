const dataModel = require('../../src/models/dataModel');

describe('Data Model', ()=>{
    test('class should be defined',() => {
        const dataModelTest = new dataModel();
        expect(dataModelTest).toBeDefined();
    });
});