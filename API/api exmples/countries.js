 const loadingCountries = () =>{
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then( data => displayingCountries(data))
     
 }
 loadingCountries();

 const  displayingCountries = countries =>{
     const countryDiv = document.getElementById('countries');
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country')
        // const h4 = document.createElement('h4');
        // const p = document.createElement('p');
        // h4.innerText = country.name.common;
        // p.innerText = country.capital;
        // div.appendChild(h4);
        // div.appendChild(p);
        div.innerHTML=`
            <h3>Country Name:${country.name.common} </h4>
            <p>Capital Name:${country.capital} </p>
            <button onclick="loadingCountryDetails('${country.name.common}')">Get Details</button>
        `
        countryDiv.appendChild(div);
    });
 }
 const loadingCountryDetails = name =>{
     const url = (
     `https://restcountries.com/v3.1/name/${name}`);
     fetch(url)
     .then (res => res.json())
     .then (data => showCountryDetails(data[0]))
 };
const showCountryDetails = details => {
    // console.log(details[0].name.common);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h3>${details.name.common}</h3>
    <p>population: ${details.population}</p>
    <img width="200px" src="${details.flags.png}">
    `
}