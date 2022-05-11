import { Get } from 'api'

export const getAllCovidCases = () => Get('/cases')

export const getCountriesAndContinents = () => Get('/cases/countries_continents_list')

export const getContinentTotals = () => Get('/cases/summary')

export const getCountry = (action) => Get(`/cases/country/${action.payload}`)

export const getContinentCountries = (action) => Get(`/cases/continent/${action.payload}`)