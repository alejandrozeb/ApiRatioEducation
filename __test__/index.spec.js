const app = require("../src/server/config");
const request = require("supertest");

describe("Test server with get", () =>{
    test( "Should return 200 code ", async () =>{
        const response = await request(app).get("/home").send();
        expect(response.statusCode).toBe(200);    
    });

    test( "Should return 404 code", async () =>{
        const response = await request(app).get("/unknown").send();
        expect(response.statusCode).toBe(404);    
    });
});


/* describe("Get /country",() =>{
    test("Should respond with a 200 status code", async()=>{
        const response = await request(app).get("/country").send();
        expect(response.statusCode).toBe(200);
    });

    test("Should respond with data", async()=>{
        const response = await request(app).get("/country").send();
        expect(response.body).toBeDefined();
    });

    test("Should be in a controller", async()=>{
        expect(controllers.CountriesController).toBeDefined();
    });
});

describe("Country Controller",()=>{
    test("Should return all countries data ", ()=>{
        let countries = controllers.CountriesController.allCountries();
        expect(countries).toBeDefined();
    });
});

describe("Country service",()=>{
    test("Should exits a service", () =>{
        let countries = Services.CountriesService.getAllCountries();
        expect(countries).toBeDefined();
    });

    test("Should return countries data", () => {
        let countries = Services.CountriesService.getAllCountries();

        expect(countries).toHaveProperty('country');
        expect(countries).toHaveProperty('year');
        expect(countries).toHaveProperty('ratio');
    });
}); */