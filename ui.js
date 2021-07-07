class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    // Painting the UI with results
    paint(weather) {
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + ' C';
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
    }

    // Clears aleart messages
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    //Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}