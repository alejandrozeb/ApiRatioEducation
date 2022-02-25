const countryRoutes = require('../../src/routes/CountryRoute');
const services = require('../../src/services/index');
const app = require("../../src/server/config");
const request = require("supertest");

describe('Testing endpoints for /country/', () => {
    test('country/all endpoint should return 200 code ',async ()=>{
        const response = await request(app).get("/country/all").send();
        expect(response.statusCode).toBe(200);   
    });

    test('country/all endpoint should return Json type ',async ()=>{
        const response = await request(app).get("/country/all").send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });

    test('country/all endpoint should return a JSON with countries ', async ()=>{
        const countries = {"Country": "Bolivia"};
        const response = await request(app).get("/country/all").send();
        expect(response.body).toEqual(countries);
    });

    test('country/all endpoint should call a service', ()=>{
        const countryService = services.countryService();
        expect(countryService).toHaveBeenCalled();
    });
});