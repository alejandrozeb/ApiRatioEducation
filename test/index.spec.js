import app from "../src/app";
import request  from "supertest";

import controllers from "../src/controllers/index"; 

describe("GET /Ping", () =>{
    test( "Test ping", async () =>{
        const response = await request(app).get("/ping").send();
        expect(response.statusCode).toBe(200);    
    });
});

describe("Get /country",() =>{
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

describe("Country Controllers",()=>{
    test("Should return all countries data ", ()=>{
        let countries = controllers.CountriesController.allCountries();
        expect(countries).toBeDefined();
    });
});