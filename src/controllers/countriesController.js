class CountryController{}

CountryController.allCountries = (req,res)=>{
    res.json({"Countries": "Bolivia" })
}


module.exports = CountryController;