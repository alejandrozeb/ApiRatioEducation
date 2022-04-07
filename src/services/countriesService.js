const Repositories = require('../repositories/index');

class CountryService{
  static getAllCountries(){
    let dataCountries = Repositories.countryRepository.getAll();
    let dataCountriesArray = [];
    return dataCountriesArray;
  }
}


module.exports = CountryService;