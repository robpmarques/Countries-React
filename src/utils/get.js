import axios from 'axios';

export function getCountries() {
    return axios.get('https://restcountries.eu/rest/v2/all');
};

export function getByRegion(country) {
    console.log(country);
    return axios.get(`https://restcountries.eu/rest/v2/region/${country}`);
};
