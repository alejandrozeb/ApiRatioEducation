import app from "../src/app";
import request  from "supertest";

describe("GET /Ping", () =>{
    test( "Test ping", async () =>{
        const response = await request(app).get("/ping").send();
        expect(response.statusCode).toBe(200);    
    });
});