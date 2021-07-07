// Initialising values
const weather = new Weather('boston', 'usa');
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data);
            ui.paint(data);
        })
        .catch(err => console.log(err));
}



// // Search input
// const w = document.getElementById('searchUser');

// searchUser.addEventListener('keyup', (e) => {
//     // Get input text
//     const userText = e.target.value;

//     if(userText !== '') {
//         ui.clearAlert();

//         github.getUser(userText)
//             .then(data => {
//                 if(data.profile.message === 'Not Found') {
//                     // Show Alert
//                     ui.showAlert('User not found', 'alert alert-danger');
//                 } else {
//                     // Show Profile
//                     ui.clearAlert();
//                     ui.showProfile(data.profile);
//                     ui.showRepos(data.repos);
//                 }
//             });
//     } else {
//         ui.clearProfile();
//     }
// });