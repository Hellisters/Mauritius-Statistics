var elem_confirmed = document.getElementById("confirmed");
var elem_recovered = document.getElementById("recovered");
var elem_deaths = document.getElementById("deaths");

function GetData() {

    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";

    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => data != null ? displayData(data, "Mauritius") : (elem_confirmed.innerHTML = "Loading...",
            elem_recovered.innerHTML = "Loading...", elem_deaths.innerHTML = "Loading..."))
        .catch((err) => errorHandler(err));
}

function processData(data) {
    console.table(data);
}

function errorHandler(err) {
    console.log('%c' + err, 'background: #222; color: #bada55');
}

function extractData(data, country, checkType) {
    checkType == 1 ? console.table(data[country].slice(-1)) : console.table(data[country]);
}

function displayData(data, country) {

    //Get elements by Id
    let id_confirm = document.getElementById("confirmed");
    let id_recovered = document.getElementById("recovered");
    let id_deaths = document.getElementById("deaths");

    //Slicing to get latest data
    let slice_data = data[country].slice(-1);

    //Getting data
    let confirmed = slice_data[0]["confirmed"];
    let recovered = slice_data[0]["recovered"];
    let deaths = slice_data[0]["deaths"];

    //Displaying data
    id_confirm.innerHTML = confirmed;
    id_recovered.innerHTML = recovered;
    id_deaths.innerHTML = deaths;
}

GetData();