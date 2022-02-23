const routes = require("../../src/routes/Routes.index");

describe("testing Routes objects", ()=>{
    test("/Home route should be defined ", ()=>{
        const homeRoute = routes.HomeRoute;
        expect(homeRoute).toBeDefined();
    });
    test("/Country route should be defined ", ()=>{
        const homeRoute = routes.CountryRoute;
        expect(homeRoute).toBeDefined();
    });
});