const dbConfig = require('../../src/database/config');

describe('DataBase config', ()=>{
    test('sequelize atribute should be defined',() => {
        const dbTest = dbConfig;
        expect(dbTest.sequelize).toBeDefined();
    });

    test('Sequelize atribute should be defined',() => {
        const dbTest = dbConfig;
        expect(dbTest.Sequelize).toBeDefined();
    });

    test('DataModel atribute should be defined',() => {
        const dbTest = dbConfig;
        expect(dbTest.DataModel).toBeDefined();
    });

    test('CountryModel atribute should be defined',() => {
        const dbTest = dbConfig;
        expect(dbTest.CountryModel).toBeDefined();
    });
});