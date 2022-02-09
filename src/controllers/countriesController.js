import Services from "../services/index"

let CountriesController = {}
CountriesController.allCountries = () =>{
    let countries = Services.CountriesService.getAllCountries();
    return countries;
}

export default CountriesController;