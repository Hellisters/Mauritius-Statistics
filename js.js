var elem_confirmed = document.getElementById("confirmed");
var elem_recovered = document.getElementById("recovered");
var elem_deaths = document.getElementById("deaths");

function GetData() {

    elem_confirmed.innerHTML = "Loading...";
    elem_recovered.innerHTML = "Loading...";
    elem_deaths.innerHTML = "Loading...";

    setTimeout(function bla() {
        const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";

        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((data) => displayData(data, "Mauritius"))
            .catch((err) => errorHandler(err));
    }, 1000);

}

function processData(data) {
    console.table(data);
}

function errorHandler(err) {
    console.log('%c' + err, 'background: #222; color: #bada55');
    elem_confirmed.innerHTML = "No result!";
    elem_recovered.innerHTML = "No result!";
    elem_deaths.innerHTML = "No result!";
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

    if (data != null) {
        //Displaying data
        id_confirm.innerHTML = confirmed;
        id_recovered.innerHTML = recovered;
        id_deaths.innerHTML = deaths;
    }
}
GetData();