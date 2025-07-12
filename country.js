const countryContainer = document.getElementById('countries');
const searchInput = document.getElementById('search');
const regionFilter = document.getElementById('regionFilter');

async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  displayCountries(data);
}

function displayCountries(countries) {
  countryContainer.innerHTML = "";
  countries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${country.flags.svg}" alt="${country.name.common} flag">
      <h2>${country.name.common}</h2>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    `;
    countryContainer.appendChild(card);
  });
}

function filterCountries(data) {
  const search = searchInput.value.toLowerCase();
  const region = regionFilter.value;
  return data.filter(c =>
    (region === 'all' || c.region === region) &&
    c.name.common.toLowerCase().includes(search)
  );
}

let allCountries = [];
fetchCountries().then(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      allCountries = data;
      displayCountries(data);
    });
});

searchInput.addEventListener('input', () => {
  const filtered = filterCountries(allCountries);
  displayCountries(filtered);
});

regionFilter.addEventListener('change', () => {
  const filtered = filterCountries(allCountries);
  displayCountries(filtered);
});