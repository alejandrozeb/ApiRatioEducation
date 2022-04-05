const dataModel = require('../../src/models/dataModel');

describe('Data Model', ()=>{
    test('class should be defined',() => {
        const dataModelTest = dataModel;
        expect(dataModelTest).toBeDefined();
    });
});