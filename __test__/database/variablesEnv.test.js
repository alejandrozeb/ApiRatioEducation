const {HOST, DBNAME, PASSWORD, PORT, USER, LOGGING} = require('../../src/database/variablesEnv');

describe('Environment variables', ()=>{
    test('Host should be defined',() => {
        const host = HOST;
        expect(host).toBeDefined();
    });

    test('DBNAME should be defined',() => {
        const dbn = DBNAME;
        expect(dbn).toBeDefined();
    });

    test('PASSWORD should be defined',() => {
        const pass = PASSWORD;
        expect(pass).toBeDefined();
    });

    test('PORT should be defined',() => {
        const port = PORT;
        expect(port).toBeDefined();
    });

    test('USER should be defined',() => {
        const user = USER;
        expect(user).toBeDefined();
    });

    test('LOGGING should be defined',() => {
        const logging = LOGGING;
        expect(logging).toBeDefined();
    });


});