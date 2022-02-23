const countryRoutes = require('../../src/routes/CountryRoute');
const app = require("../../src/server/config");
const request = require("supertest");

describe('Testing endpoints for /country/', () => {
    test('/all endpoint should return 200 code ',async ()=>{
        const response = await request(app).get("/country/all").send();
        expect(response.statusCode).toBe(200);   
    });
});