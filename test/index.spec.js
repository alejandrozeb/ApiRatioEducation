import app from "../src/app";
import request  from "supertest";

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

    test("Should respond with a json", async()=>{
        const response = await request(app).get("/country").send();
        expect(response.body).toBeInstanceOf(Array);
    });
});