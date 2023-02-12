// import { Chart } from "chart.js";

const continents = ['africa', 'americas', 'asia', 'europe', 'oceania'];

function getCountries(continent) {
    const countries = [];
    fetch(`https://restcountries.com/v2/region/${continent}`).then(data => data.json()).then(data => {
    // console.log(data);
    data.map((element => {
        let obj = {name: element.name, code: element.alpha3Code}
        countries.push(obj);
    }));
    });
    return countries;
}

function getCountryPopInfo() {
    const countries = [];
    fetch('https://countriesnow.space/api/v0.1/countries/population').then(data => data.json()).then(data => {
        // console.log(data.data);
        data.data.map((element => {
            let obj = {name: element.country, code: element.iso3, population: element.populationCounts};
            countries.push(obj);
        }));
    });
    return countries;
}

function getCityPopInfo() {
    const cities = [];
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities').then(data => data.json()).then(data => {
        // console.log(data);
        data.data.map((element) => {
            cities.push(element);
        });
    });
    return cities;
}

function checkCode(countryByContinent, countryByPopInfo) {
    
}

const countriesEurope = getCountries('europe');
const countriesPop = getCountryPopInfo();
const citiesPop = getCityPopInfo();

console.log(countriesEurope);
console.log(countriesPop);
console.log(citiesPop);

let chart = document.getElementById('chart');

let popChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: countriesPop.map((element) => element.code),
        datasets: [{
            label: 'Population',
            data: countriesPop.map((element) => element.populationCounts)
        }],
    },
    options: {}
});