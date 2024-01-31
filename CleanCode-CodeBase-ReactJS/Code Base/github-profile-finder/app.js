// Initialize (instantiate) Github
const github = new Github;

// Initialize (instantiate) UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        //console.log(userText);
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                //console.log(data)
                console.log(data.repos);
                if(data.profile.message === 'Not Found') {
                   // Show alert
                   ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear the profile
        ui.clearProfile(); 
    }
})