const Services = require('../services/index');
class CountryController{}

CountryController.allCountries = (req,res)=>{
    let dataCountries = Services.CountryService.getAllCountries();
    res.json({"Countries": "Bolivia" })
}

module.exports = CountryController;