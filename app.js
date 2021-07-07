// Initialising values
const weather = new Weather('boston', 'usa');
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    //Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data);
            ui.paint(data);
        })
        .catch(err => console.log(err));
}